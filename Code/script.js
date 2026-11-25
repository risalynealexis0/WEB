// ====== GARIS KEMAJUAN BACA ======
window.addEventListener("scroll", function () {
  var tinggiHalaman = document.documentElement.scrollHeight - window.innerHeight;
  var posisi = window.scrollY;
  var persen = tinggiHalaman > 0 ? (posisi / tinggiHalaman) * 100 : 0;
  document.getElementById("progress-bar").style.width = persen + "%";
});

// ====== BASIS DATA SPESIES PARUH BENGKOK (ENSIKLOPEDIA & KASUS JABODETABEK) ======
var DATA_SPESIES = [
  {
    id: "cacatua-sulphurea",
    caseId: "KASUS-01",
    nama: "Kakatua Jambul Kuning",
    latin: "Cacatua sulphurea",
    iucn: "CR",
    iucnLabel: "Kritis (Critically Endangered)",
    hukum: "Dilindungi (UU No. 5/1990 & P.106/2018)",
    asal: "Sulawesi, Nusa Tenggara & Kep. Sunda Kecil",
    harga: "Rp 4,5 jt – Rp 12 jt",
    platform: ["Facebook", "WhatsApp"],
    platformUtama: "Facebook Group & WA",
    wilayah: "Jakarta Timur, Bekasi, Tangerang",
    foto: "../Foto/burung-paruh-bengkok.jpg",
    fokusFoto: "center 12%",
    modus: "Ditawarkan menggunakan kode samaran ('jambul kuning', 'JK rawatan') di grup tertutup Facebook. Negosiasi harga dan pengiriman video kondisi burung langsung dialihkan ke WhatsApp pribadi sebelum transaksi COD.",
    catatan: "Populasi liar terus menyusut drastis akibat perburuan anakan dari sarang alam untuk memenuhi permintaan kolektor di wilayah urban Jabodetabek."
  },
  {
    id: "eclectus-roratus",
    caseId: "KASUS-02",
    nama: "Nuri Bayan",
    latin: "Eclectus roratus",
    iucn: "LC",
    iucnLabel: "Risiko Rendah (Namun Dilindungi Nasional)",
    hukum: "Dilindungi (UU No. 5/1990 & P.106/2018)",
    asal: "Maluku, Halmahera & Papua",
    harga: "Rp 3 jt – Rp 8,5 jt",
    platform: ["Facebook", "Instagram", "WhatsApp"],
    platformUtama: "Instagram & Facebook",
    wilayah: "Jakarta Selatan, Depok, Bogor",
    foto: "../Foto/nuri-bayan.jpg",
    fokusFoto: "center 16%",
    modus: "Sering dipromosikan sebagai 'burung pintar jinak / lolohan' di reels Instagram dan akun jual-beli. Penjual kerap mengklaim burung berasal dari penangkaran tanpa menyertakan dokumen SATS-DN resmi.",
    catatan: "Dimorfisme seksual yang mencolok (jantan hijau zamrud, betina merah-ungu) membuat pasangan Nuri Bayan kerap dijual paket dengan harga lebih tinggi."
  },
  {
    id: "probosciger-aterrimus",
    caseId: "KASUS-03",
    nama: "Kakatua Raja",
    latin: "Probosciger aterrimus",
    iucn: "LC",
    iucnLabel: "Risiko Rendah (Apendiks I CITES)",
    hukum: "Dilindungi Ketat (Apendiks I CITES & UU 5/1990)",
    asal: "Papua & Kepulauan Aru",
    harga: "Rp 18 jt – Rp 45 jt+",
    platform: ["WhatsApp", "Instagram"],
    platformUtama: "Jaringan WA Tertutup",
    wilayah: "Jakarta Barat, Jakarta Utara, Tangerang",
    foto: "../Foto/kakatua-raja.jpg",
    fokusFoto: "center 8%",
    modus: "Jarang muncul di etalase publik. Penawaran dilakukan secara berjenjang lewat status WhatsApp atau DM Instagram kepada pembeli berkantong tebal dengan sistem pre-order dan pengiriman jalur kargo gelap.",
    catatan: "Merupakan salah satu paruh bengkok terbesar dan termahal di pasar gelap Jabodetabek. Tingkat mortalitas selama penyelundupan dari Papua sangat tinggi."
  },
  {
    id: "cacatua-moluccensis",
    caseId: "KASUS-04",
    nama: "Kakatua Maluku (Seram)",
    latin: "Cacatua moluccensis",
    iucn: "VU",
    iucnLabel: "Rentan (Vulnerable)",
    hukum: "Dilindungi (UU No. 5/1990 & P.106/2018)",
    asal: "Pulau Seram, Maluku",
    harga: "Rp 6 jt – Rp 15 jt",
    platform: ["Facebook", "WhatsApp"],
    platformUtama: "Facebook & COD Malam",
    wilayah: "Bekasi, Bogor, Jakarta Timur",
    foto: "../Foto/kakatua-maluku.jpg",
    fokusFoto: "center 8%",
    modus: "Transaksi sering disepakati lewat grup hobi burung eksotis, dengan titik temu COD di area parkir atau pinggir jalan tol Jabodetabek pada malam hari untuk menghindari pantauan petugas.",
    catatan: "Jambul merah muda salmon yang khas menjadikannya komoditas prestise. Banyak individu ditemukan dalam kondisi stres berat dan mencabuti bulunya sendiri."
  },
  {
    id: "lorius-garrulus",
    caseId: "KASUS-05",
    nama: "Nuri Maluku (Kasturi Ternate)",
    latin: "Lorius garrulus",
    iucn: "VU",
    iucnLabel: "Rentan (Vulnerable)",
    hukum: "Dilindungi (UU No. 5/1990 & P.106/2018)",
    asal: "Maluku Utara (Halmahera, Ternate)",
    harga: "Rp 1,8 jt – Rp 4,5 jt",
    platform: ["Facebook", "WhatsApp"],
    platformUtama: "Grup Facebook Harian",
    wilayah: "Depok, Tangerang, Bekasi",
    foto: "../Foto/nuri-maluku.jpg",
    fokusFoto: "center 18%",
    modus: "Dijual secara terbuka hampir setiap hari di grup lelang burung Facebook dengan istilah 'nuri merah gacor'. Pengiriman jarak dekat di Jabodetabek memanfaatkan kurir instan daring.",
    catatan: "Tingginya volume penawaran daring menunjukkan pasokan dari pengepul masih mengalir rutin melalui pelabuhan tikus menuju Jawa."
  },
  {
    id: "trichoglossus-haematodus",
    caseId: "KASUS-06",
    nama: "Perkici Pelangi",
    latin: "Trichoglossus haematodus",
    iucn: "LC",
    iucnLabel: "Risiko Rendah (Dilindungi di Indonesia)",
    hukum: "Dilindungi (Permen LHK P.106/2018)",
    asal: "Papua, Maluku & Nusa Tenggara",
    harga: "Rp 750 rb – Rp 2,2 jt",
    platform: ["Facebook", "Instagram", "WhatsApp"],
    platformUtama: "Facebook & Instagram",
    wilayah: "Jakarta, Depok, Bogor, Bekasi",
    foto: "../Foto/perkici-pelangi.jpg",
    fokusFoto: "center 25%",
    modus: "Menjadi 'pintu masuk' bagi pembeli pemula karena harganya relatif terjangkau. Sering dijual berpasangan dalam kardus berlubang menggunakan layanan kirim instan.",
    catatan: "Banyak pembeli tidak menyadari bahwa seluruh jenis paruh bengkok asli Indonesia termasuk satwa yang dilindungi undang-undang."
  }
];

// ====== RENDER & FILTER ENSIKLOPEDIA SPESIES ======
var gridEl = document.getElementById("species-grid");
var countEl = document.getElementById("species-count");
var searchEl = document.getElementById("search-species");
var filterStatus = "all";
var filterPlatform = "all";
var searchQuery = "";

function renderSpecies() {
  if (!gridEl) return;

  var filtered = DATA_SPESIES.filter(function (s) {
    var matchStatus = filterStatus === "all" || s.iucn === filterStatus;
    var matchPlatform = filterPlatform === "all" || s.platform.indexOf(filterPlatform) !== -1;
    var q = searchQuery.trim().toLowerCase();
    var matchQuery =
      !q ||
      s.nama.toLowerCase().indexOf(q) !== -1 ||
      s.latin.toLowerCase().indexOf(q) !== -1 ||
      s.wilayah.toLowerCase().indexOf(q) !== -1 ||
      s.modus.toLowerCase().indexOf(q) !== -1;
    return matchStatus && matchPlatform && matchQuery;
  });

  if (countEl) {
    countEl.textContent = "Menampilkan " + filtered.length + " dari " + DATA_SPESIES.length + " spesies";
  }

  if (filtered.length === 0) {
    gridEl.innerHTML =
      '<div class="empty-state">Tidak ada berkas spesies yang cocok dengan filter atau pencarian Anda.</div>';
    return;
  }

  gridEl.innerHTML = filtered
    .map(function (s) {
      return (
        '<button type="button" class="species-card" data-species-id="' + s.id + '">' +
          '<div class="card-media">' +
            '<span class="iucn-badge iucn-' + s.iucn + '">IUCN: ' + s.iucn + '</span>' +
            '<span class="card-case-id">' + s.caseId + '</span>' +
            '<img src="' + s.foto + '" alt="' + s.nama + ' (' + s.latin + ')" style="object-position:' + (s.fokusFoto || "center 15%") + '" loading="lazy">' +
          '</div>' +
          '<div class="card-body">' +
            '<h3 class="card-title">' + s.nama + '</h3>' +
            '<p class="card-latin">' + s.latin + '</p>' +
            '<div class="card-meta">' +
              '<div class="meta-cell">' +
                '<span class="meta-lbl">Estimasi Pasar Gelap</span>' +
                '<span class="meta-val price">' + s.harga + '</span>' +
              '</div>' +
              '<div class="meta-cell">' +
                '<span class="meta-lbl">Platform Dominan</span>' +
                '<span class="meta-val">' + s.platformUtama + '</span>' +
              '</div>' +
            '</div>' +
            '<div class="card-footer">' +
              '<span>' + s.wilayah.split(",")[0] + ' &amp; sekitarnya</span>' +
              '<span>Buka Berkas →</span>' +
            '</div>' +
          '</div>' +
        '</button>'
      );
    })
    .join("");
}

// Filter listeners
document.querySelectorAll("[data-filter-status]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll("[data-filter-status]").forEach(function (b) {
      b.classList.remove("aktif");
    });
    btn.classList.add("aktif");
    filterStatus = btn.getAttribute("data-filter-status");
    renderSpecies();
  });
});

document.querySelectorAll("[data-filter-platform]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll("[data-filter-platform]").forEach(function (b) {
      b.classList.remove("aktif");
    });
    btn.classList.add("aktif");
    filterPlatform = btn.getAttribute("data-filter-platform");
    renderSpecies();
  });
});

if (searchEl) {
  searchEl.addEventListener("input", function (e) {
    searchQuery = e.target.value;
    renderSpecies();
  });
}

// ====== MODAL BERKAS SPESIES ======
var modalEl = document.getElementById("species-modal");
var modalBodyEl = document.getElementById("modal-body");
var modalCloseBtn = document.getElementById("modal-close");
var lastFocusedEl = null;

function openSpeciesModal(speciesId) {
  var s = DATA_SPESIES.find(function (item) {
    return item.id === speciesId;
  });
  if (!s || !modalEl || !modalBodyEl) return;

  lastFocusedEl = document.activeElement;
  modalBodyEl.innerHTML =
    '<div class="modal-grid">' +
      '<div class="modal-photo-col">' +
        '<img src="' + s.foto + '" alt="' + s.nama + '">' +
        '<div class="modal-taxonomy">' +
          '<div class="tax-row"><span>Nomor Berkas</span><strong>' + s.caseId + '</strong></div>' +
          '<div class="tax-row"><span>Status IUCN</span><strong>' + s.iucnLabel + '</strong></div>' +
          '<div class="tax-row"><span>Status Hukum</span><strong>' + s.hukum + '</strong></div>' +
          '<div class="tax-row"><span>Habitat Asal</span><strong>' + s.asal + '</strong></div>' +
          '<div class="tax-row"><span>Sebaran Pasar</span><strong>' + s.wilayah + '</strong></div>' +
        '</div>' +
      '</div>' +
      '<div class="modal-info-col">' +
        '<p class="modal-kicker">DOKUMEN PROFIL SPESIES // JABODETABEK</p>' +
        '<h2 id="modal-title">' + s.nama + '</h2>' +
        '<p class="modal-latin">' + s.latin + '</p>' +
        '<div class="modal-stats">' +
          '<div class="modal-stat-box">' +
            '<span class="lbl">Harga Pasar Gelap</span>' +
            '<span class="val" style="color:#fca5a5">' + s.harga + '</span>' +
          '</div>' +
          '<div class="modal-stat-box">' +
            '<span class="lbl">Kanal Utama</span>' +
            '<span class="val">' + s.platformUtama + '</span>' +
          '</div>' +
        '</div>' +
        '<h3 class="modal-section-title">Modus Perdagangan di Media Sosial</h3>' +
        '<p class="modal-text">' + s.modus + '</p>' +
        '<h3 class="modal-section-title">Catatan Lapangan &amp; Dampak Ekologis</h3>' +
        '<p class="modal-text">' + s.catatan + '</p>' +
      '</div>' +
    '</div>';

  modalEl.hidden = false;
  document.body.style.overflow = "hidden";
  if (modalCloseBtn) modalCloseBtn.focus();
}

function closeSpeciesModal() {
  if (!modalEl) return;
  modalEl.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

if (gridEl) {
  gridEl.addEventListener("click", function (e) {
    var card = e.target.closest(".species-card");
    if (card) {
      openSpeciesModal(card.getAttribute("data-species-id"));
    }
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeSpeciesModal);
}

if (modalEl) {
  modalEl.addEventListener("click", function (e) {
    if (e.target === modalEl) closeSpeciesModal();
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalEl && !modalEl.hidden) {
    closeSpeciesModal();
  }
});

renderSpecies();

// ====== ANIMASI MUNCUL SAAT DIGULIR ======
var elemenAnimasi = document.querySelectorAll(
  ".artikel p, .artikel h2, .artikel blockquote, .artikel figure, " +
  ".artikel aside, .peta-blok, footer p"
);

elemenAnimasi.forEach(function (el) {
  el.classList.add("reveal");
});

var pengamat = new IntersectionObserver(
  function (daftar) {
    daftar.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("terlihat");
        pengamat.unobserve(item.target);
      }
    });
  },
  { threshold: 0.12 }
);

elemenAnimasi.forEach(function (el) {
  pengamat.observe(el);
});

// ====== PETA INTERAKTIF (TEMA GELAP) ======
if (typeof L !== "undefined" && document.getElementById("peta")) {
  var titikPeta = [
    { nama: "Jakarta",  lat: -6.2088, lng: 106.8456, catatan: "[Isi temuanmu untuk Jakarta]" },
    { nama: "Bogor",    lat: -6.5971, lng: 106.8060, catatan: "[Isi temuanmu untuk Bogor]" },
    { nama: "Depok",    lat: -6.4025, lng: 106.7942, catatan: "[Isi temuanmu untuk Depok]" },
    { nama: "Tangerang", lat: -6.1783, lng: 106.6319, catatan: "[Isi temuanmu untuk Tangerang]" },
    { nama: "Bekasi",   lat: -6.2383, lng: 106.9756, catatan: "[Isi temuanmu untuk Bekasi]" }
  ];

  var batasIndonesia  = [[-11.5, 94.5], [6.5, 141.5]];
  var batasJabodetabek = [[-6.7, 106.5], [-6.1, 107.1]];

  var peta = L.map("peta", {
    scrollWheelZoom: false,
    dragging: !L.Browser.mobile,
    minZoom: 3,
    maxZoom: 12
  });

  peta.fitBounds(batasIndonesia);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(peta);

  var ikonTitik = L.divIcon({
    className: "titik-wrap",
    html: '<span class="titik-peta"></span>',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  titikPeta.forEach(function (t) {
    L.marker([t.lat, t.lng], { icon: ikonTitik, title: t.nama })
      .addTo(peta)
      .bindPopup("<strong>" + t.nama + "</strong><br>" + t.catatan);
  });

  var sumberBatas = [
    "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/IDN.geo.json",
    "https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries/IDN.geo.json"
  ];

  var lapisSorotan = null;
  var sorotanHidup = true;

  function aturSorotan(hidup) {
    sorotanHidup = hidup;
    if (!lapisSorotan) return;
    lapisSorotan.eachLayer(function (bagian) {
      var el = bagian.getElement();
      if (el) el.classList.toggle("menyala", hidup);
    });
  }

  function pasangSorotan(data) {
    lapisSorotan = L.geoJSON(data, {
      interactive: false,
      style: { className: "sorotan-indonesia" }
    }).addTo(peta);
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

  var tombolIndonesia  = document.getElementById("btn-indonesia");
  var tombolJabodetabek = document.getElementById("btn-jabodetabek");

  function aktifkan(tombol) {
    tombolIndonesia.classList.remove("aktif");
    tombolJabodetabek.classList.remove("aktif");
    tombol.classList.add("aktif");
  }

  tombolIndonesia.addEventListener("click", function () {
    aktifkan(tombolIndonesia);
    aturSorotan(true);
    peta.flyToBounds(batasIndonesia, { duration: 1.8 });
  });

  tombolJabodetabek.addEventListener("click", function () {
    aktifkan(tombolJabodetabek);
    aturSorotan(false);
    peta.flyToBounds(batasJabodetabek, { duration: 1.8, padding: [20, 20] });
  });

  setTimeout(function () { peta.invalidateSize(); }, 1000);
}
