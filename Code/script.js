// Garis kemajuan baca: makin ke bawah, makin panjang
window.addEventListener("scroll", function () {
  var tinggiHalaman = document.documentElement.scrollHeight - window.innerHeight;
  var posisi = window.scrollY;
  var persen = (posisi / tinggiHalaman) * 100;
  document.getElementById("progress-bar").style.width = persen + "%";
});

// ====== ANIMASI MUNCUL SAAT DIGULIR ======
// Semua elemen isi artikel otomatis diberi efek "muncul pelan"
// saat masuk ke layar. Kamu tidak perlu menambah apa pun di HTML.
var elemenAnimasi = document.querySelectorAll(
  ".artikel p, .artikel h2, .artikel blockquote, .artikel figure, " +
  ".artikel aside, .artikel video, .artikel ul, .peta-blok, footer p"
);

elemenAnimasi.forEach(function (el) {
  el.classList.add("reveal");
});

var pengamat = new IntersectionObserver(
  function (daftar) {
    daftar.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("terlihat");
        pengamat.unobserve(item.target); // cukup animasi sekali
      }
    });
  },
  { threshold: 0.15 } // aktif saat 15% elemen sudah terlihat
);

elemenAnimasi.forEach(function (el) {
  pengamat.observe(el);
});

// ====== PETA INTERAKTIF ======
// Hanya dijalankan kalau pustaka Leaflet berhasil dimuat
// dan ada elemen dengan id="peta" di halaman.
if (typeof L !== "undefined" && document.getElementById("peta")) {

  // ---- DATA TITIK: ubah/tambah di sini ----
  // Gunakan lokasi tingkat kota/wilayah saja. Jangan menandai alamat
  // pribadi penjual, pembeli, atau narasumber.
  var titikPeta = [
    { nama: "Jakarta",  lat: -6.2088, lng: 106.8456, catatan: "[Isi temuanmu untuk Jakarta]" },
    { nama: "Bogor",    lat: -6.5971, lng: 106.8060, catatan: "[Isi temuanmu untuk Bogor]" },
    { nama: "Depok",    lat: -6.4025, lng: 106.7942, catatan: "[Isi temuanmu untuk Depok]" },
    { nama: "Tangerang", lat: -6.1783, lng: 106.6319, catatan: "[Isi temuanmu untuk Tangerang]" },
    { nama: "Bekasi",   lat: -6.2383, lng: 106.9756, catatan: "[Isi temuanmu untuk Bekasi]" }
  ];

  // ---- Batas tampilan ----
  var batasIndonesia  = [[-11.5, 94.5], [6.5, 141.5]];
  var batasJabodetabek = [[-6.7, 106.5], [-6.1, 107.1]];

  // ---- Membuat peta ----
  var peta = L.map("peta", {
    scrollWheelZoom: false,        // roda mouse tidak mengganggu gulir halaman
    dragging: !L.Browser.mobile,   // di HP, geser jari tetap menggulir halaman
    minZoom: 3,
    maxZoom: 12
  });

  peta.fitBounds(batasIndonesia);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(peta);

  // ---- Memasang titik ----
  var ikonTitik = L.divIcon({
    className: "titik-wrap",
    html: '<span class="titik-peta"></span>',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  titikPeta.forEach(function (t) {
    L.marker([t.lat, t.lng], { icon: ikonTitik, title: t.nama })
      .addTo(peta)
      .bindPopup("<strong>" + t.nama + "</strong><br>" + t.catatan);
  });

  // ---- SOROTAN MERAH WILAYAH INDONESIA ----
  // Data batas negara (format GeoJSON) dimuat dari internet saat halaman dibuka.
  // Kalau sumber pertama gagal, otomatis dicoba sumber berikutnya.
  var sumberBatas = [
    "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/IDN.geo.json",
    "https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries/IDN.geo.json"
  ];

  var lapisSorotan = null;   // diisi setelah data batas berhasil dimuat
  var sorotanHidup = true;   // true = Indonesia sedang merah (tombol "Seluruh Indonesia" aktif)

  // Menyalakan / mematikan warna merah (dihaluskan oleh CSS .sorotan-indonesia)
  function aturSorotan(hidup) {
    sorotanHidup = hidup;
    if (!lapisSorotan) return;   // data belum siap; akan dipasang otomatis saat siap
    lapisSorotan.eachLayer(function (bagian) {
      var el = bagian.getElement();
      if (el) el.classList.toggle("menyala", hidup);
    });
  }

  function pasangSorotan(data) {
    lapisSorotan = L.geoJSON(data, {
      interactive: false,                        // klik tetap tembus ke peta dan titik
      style: { className: "sorotan-indonesia" }  // warna diatur di style.css
    }).addTo(peta);
    // jeda singkat supaya transisi warna terlihat
    setTimeout(function () { aturSorotan(sorotanHidup); }, 150);
  }

  function muatBatas(urutan) {
    if (urutan >= sumberBatas.length) {
      console.warn("Data batas Indonesia gagal dimuat dari semua sumber.");
      return;
    }
    fetch(sumberBatas[urutan])
      .then(function (respons) {
        if (!respons.ok) throw new Error("HTTP " + respons.status);
        return respons.json();
      })
      .then(pasangSorotan)
      .catch(function () { muatBatas(urutan + 1); });
  }

  muatBatas(0);

  // ---- Tombol pindah tampilan ----
  var tombolIndonesia  = document.getElementById("btn-indonesia");
  var tombolJabodetabek = document.getElementById("btn-jabodetabek");

  function aktifkan(tombol) {
    tombolIndonesia.classList.remove("aktif");
    tombolJabodetabek.classList.remove("aktif");
    tombol.classList.add("aktif");
  }

  tombolIndonesia.addEventListener("click", function () {
    aktifkan(tombolIndonesia);
    aturSorotan(true);    // Indonesia menjadi merah
    peta.flyToBounds(batasIndonesia, { duration: 1.8 });
  });

  tombolJabodetabek.addEventListener("click", function () {
    aktifkan(tombolJabodetabek);
    aturSorotan(false);   // merah dipudarkan agar detail kota terlihat jelas
    peta.flyToBounds(batasJabodetabek, { duration: 1.8, padding: [20, 20] });
  });

  // Pastikan ukuran peta pas setelah animasi muncul selesai
  setTimeout(function () { peta.invalidateSize(); }, 1000);
}