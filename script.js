// ============================================================
// DATA KASUS (52 Data Setelah Perbaikan)
// ============================================================
const cases = [
    // ===== DATA TETAP =====
    { nomor: "2190/Pdt.G/2012/PA.Sby", jenis: "Eksekusi Tanah dan Bangunan", tahun: "2012", status: "selesai", hasil: "Menang (Pemohon Eksekusi)", deskripsi: "Perkara eksekusi tanah dan bangunan yang dimenangkan oleh pemohon eksekusi di Pengadilan Agama Surabaya." },
    { nomor: "535/Pdt.G/2013/PN.Sby", jenis: "Perbuatan Melanggar Hukum", tahun: "2013", status: "selesai", hasil: "Menang / Berkekuatan Hukum Tetap", deskripsi: "Perkara perbuatan melanggar hukum yang dimenangkan dan telah berkekuatan hukum tetap di Pengadilan Negeri Surabaya." },
    { nomor: "LP/885/B/VIII/2013/Restabes Sby", jenis: "Hukum Pidana", tahun: "2013", status: "selesai", hasil: "Gelar Perkara", deskripsi: "Perkara pidana yang diselesaikan melalui gelar perkara di Polda Jatim." },
    { nomor: "5945/Pdt.G/2014/PA.Sby", jenis: "Perlawanan", tahun: "2014", status: "selesai", hasil: "Menang", deskripsi: "Perkara perlawanan yang dimenangkan di Pengadilan Agama Surabaya." },
    // 98/Pdt.G/2014/PN.Jmr — DIHAPUS
    { nomor: "190/Pdt.G/2014/PN.Sby", jenis: "Wanprestasi", tahun: "2014", status: "selesai", hasil: "Menang", deskripsi: "Perkara wanprestasi yang dimenangkan di Pengadilan Negeri Surabaya." },
    { nomor: "472/Pdt.G/2014/PN.Sby", jenis: "Perbuatan Melanggar Hukum", tahun: "2014", status: "selesai", hasil: "Dading/Damai", deskripsi: "Perkara perbuatan melanggar hukum yang diselesaikan secara damai di Pengadilan Negeri Surabaya." },
    // 22/Pdt.G/2015/PN.JBG — DIHAPUS
    { nomor: "36/Pdt.G/2015/PN.Sbr", jenis: "Perbuatan Melanggar Hukum", tahun: "2015", status: "selesai", hasil: "Menang", deskripsi: "Perkara perbuatan melanggar hukum yang dimenangkan di Pengadilan Negeri Sumber, Cirebon." },
    { nomor: "50/Pdt.G/2015/PN.JBG", jenis: "Wanprestasi", tahun: "2015", status: "selesai", hasil: "Dading/Damai", deskripsi: "Perkara wanprestasi yang diselesaikan secara damai di Pengadilan Negeri Jombang." },
    { nomor: "110/G/2015/PTUN.Sby", jenis: "Sengketa Tanah", tahun: "2015", status: "selesai", hasil: "Kasus Menang", deskripsi: "Sengketa tanah yang dimenangkan di Pengadilan Tata Usaha Negara Surabaya." },
    { nomor: "231/Pdt.G/2015/PTA.Sby", jenis: "Sengketa Waris/Perlawanan", tahun: "2015", status: "selesai", hasil: "Menang", deskripsi: "Sengketa waris yang dimenangkan di Pengadilan Tinggi Agama Surabaya." },
    { nomor: "LP/215/V/2015/Jatim/Res JBG", jenis: "Hukum Pidana", tahun: "2015", status: "selesai", hasil: "Damai/SP3", deskripsi: "Perkara pidana yang diselesaikan dengan SP3 di Polres Jombang." },
    // LPB/1380/IX/2015/UM/Jatim — DIHAPUS
    { nomor: "LPB/1404/IX/2015/UM/Jatim", jenis: "Hukum Pidana", tahun: "2015", status: "selesai", hasil: "SP3", deskripsi: "Perkara pidana yang dihentikan dengan SP3 di Polda Jatim." },
    { nomor: "07/PDT/2016/PT.Sby", jenis: "Wanprestasi", tahun: "2016", status: "selesai", hasil: "Menang", deskripsi: "Perkara wanprestasi yang dimenangkan di Pengadilan Tinggi Surabaya." },
    { nomor: "176/PDT/2016/PT.BDG", jenis: "Wanprestasi", tahun: "2016", status: "selesai", hasil: "Menang", deskripsi: "Perkara wanprestasi yang dimenangkan di Pengadilan Tinggi Bandung." },
    { nomor: "Lutfi Herdyansah", jenis: "Hukum Perbankan", tahun: "2016", status: "selesai", hasil: "Klaim Nasabah", deskripsi: "Penanganan klaim nasabah perbankan di Jakarta." },
    { nomor: "CV. Logam Abadi", jenis: "Hukum Perdata", tahun: "2016", status: "berjalan", hasil: "Konsultan", deskripsi: "Konsultan hukum untuk CV. Logam Abadi di Jombang." },
    { nomor: "PT. Barokta Fina", jenis: "Hukum Perseroan", tahun: "2016", status: "berjalan", hasil: "Konsultan Hukum", deskripsi: "Konsultan hukum perseroan untuk PT. Barokta Fina di Jombang." },
    { nomor: "Yayasan Kyai Mojo", jenis: "Hukum Perdata", tahun: "2016", status: "berjalan", hasil: "Konsultan Hukum", deskripsi: "Konsultan hukum untuk Yayasan Kyai Mojo di Jombang." },
    { nomor: "PT. Chal Jaya", jenis: "Hukum Perdata", tahun: "2016", status: "berjalan", hasil: "Konsultan Hukum", deskripsi: "Konsultan hukum untuk PT. Chal Jaya di Surabaya." },
    { nomor: "PT. BPRS Kota Mojokerto", jenis: "Somasi, Non Litigasi, Litigasi, Sengketa Ekonomi Syariah", tahun: "2016", status: "selesai", hasil: "Penyelesaian Sengketa Kredit", deskripsi: "Penyelesaian sengketa kredit di Mojokerto, Mojosari, Pasuruan, Pandaan, Jombang." },
    { nomor: "PT. BMH Technologies (PMA)", jenis: "Legal Opinion", tahun: "2016", status: "selesai", hasil: "Konsultasi", deskripsi: "Pemberian legal opinion untuk PT. BMH Technologies di Surabaya." },
    { nomor: "Kiyoyuki Takeda (PMA)", jenis: "Legal Opinion -- Legal Audit", tahun: "2016", status: "selesai", hasil: "Konsultasi", deskripsi: "Pemberian legal opinion dan legal audit untuk Kiyoyuki Takeda di Jakarta." },
    { nomor: "CV. Prima Karya", jenis: "Legal Opinion", tahun: "2016", status: "selesai", hasil: "Konsultasi", deskripsi: "Pemberian legal opinion untuk CV. Prima Karya di Kediri." },
    { nomor: "Ny. Sriyatun", jenis: "Somasi", tahun: "2016", status: "selesai", hasil: "Advokasi", deskripsi: "Penanganan somasi dan advokasi untuk Ny. Sriyatun di Surabaya-Ngawi." },
    { nomor: "K/LP/275/XII/2016/Jatim/SPK", jenis: "Hukum Pidana", tahun: "2016", status: "selesai", hasil: "SP3", deskripsi: "Perkara pidana yang dihentikan dengan SP3 di Blitar." },
    { nomor: "3339 K/PDT/2016", jenis: "Hukum Perdata", tahun: "2016", status: "selesai", hasil: "Damai", deskripsi: "Perkara perdata yang diselesaikan secara damai di Mahkamah Agung." },
    { nomor: "301 K/AG/2016", jenis: "Hukum Waris", tahun: "2016", status: "selesai", hasil: "Menang", deskripsi: "Perkara waris yang dimenangkan di Mahkamah Agung." },
    { nomor: "214/PDT/2016/PT.Sby", jenis: "Hukum Perdata", tahun: "2016", status: "selesai", hasil: "Damai", deskripsi: "Perkara perdata yang diselesaikan secara damai di Pengadilan Tinggi Surabaya." },
    { nomor: "13/Pdt.G/2017/PN.Bil", jenis: "Hukum Perbankan", tahun: "2017", status: "selesai", hasil: "Damai (dengan LPS)", deskripsi: "Perkara perbankan yang diselesaikan secara damai dengan LPS di Pengadilan Negeri Bangil." },
    { nomor: "M. Lutfi Shofiq, Dkk", jenis: "Hukum Perdata -- Agraria", tahun: "2017", status: "selesai", hasil: "Damai", deskripsi: "Sengketa agraria yang diselesaikan secara damai di Pengadilan Tinggi Surabaya." },
    { nomor: "LPB/239/II/2017/UM/Jatim", jenis: "Hukum Pidana", tahun: "2017", status: "selesai", hasil: "Terpidana", deskripsi: "Perkara pidana yang telah diputus di Polda Jatim." },
    { nomor: "LPB/271/III/2017/UM/Jatim", jenis: "Hukum Pidana", tahun: "2017", status: "selesai", hasil: "Terpidana", deskripsi: "Perkara pidana yang telah diputus di Polda Jatim." },
    { nomor: "627/Pdt.G/2017/PN.Sby", jenis: "Perbuatan Melanggar Hukum", tahun: "2017", status: "selesai", hasil: "Menang", deskripsi: "Perkara perbuatan melanggar hukum yang dimenangkan di Pengadilan Negeri Surabaya." },
    { nomor: "LP/83/V/2017/Jatim/Res.SPG", jenis: "Hukum Pidana", tahun: "2017", status: "selesai", hasil: "Damai", deskripsi: "Perkara pidana yang diselesaikan secara damai di Polda Jatim." },
    { nomor: "283/Pdt/2018/PT.Sby", jenis: "Hukum Perdata", tahun: "2018", status: "selesai", hasil: "Menang", deskripsi: "Perkara perdata yang dimenangkan di Pengadilan Tinggi Surabaya." },
    { nomor: "Tn. Fauzi dan Ny. Inayah", jenis: "Hukum Perdata", tahun: "2018", status: "selesai", hasil: "Advokasi ke PT. KAI", deskripsi: "Advokasi perkara perdata ke PT. KAI untuk Tn. Fauzi dan Ny. Inayah di Surabaya." },
    { nomor: "Cawali-Cawawali Mojokerto 2018", jenis: "Hukum Pemilu dan Administrasi Daerah", tahun: "2018", status: "selesai", hasil: "Pilkada Mojokerto Tahun 2018", deskripsi: "Penanganan perkara hukum pemilu untuk Pilkada Mojokerto 2018." },
    { nomor: "Ny. Mimik Lestari, S.H.", jenis: "Hukum Pemilu", tahun: "2018", status: "selesai", hasil: "Tidak Cukup Bukti", deskripsi: "Perkara hukum pemilu yang dihentikan karena tidak cukup bukti di Panwaslu." },
    { nomor: "Ny. Suratmi", jenis: "Hukum Perbankan", tahun: "2018", status: "selesai", hasil: "Somasi", deskripsi: "Penanganan somasi untuk Ny. Suratmi di Surabaya." },
    { nomor: "332/Pdt.G/2018/PN.Sby", jenis: "Hukum Perdata", tahun: "2018", status: "selesai", hasil: "Menang", deskripsi: "Perkara perdata yang dimenangkan di Pengadilan Negeri Surabaya." },
    { nomor: "H. Kaselan", jenis: "Hukum Perbankan dan Likuidasi", tahun: "2018", status: "selesai", hasil: "Pemohon", deskripsi: "Penanganan perkara perbankan dan likuidasi untuk H. Kaselan di Pasuruan." },
    { nomor: "PT. Saranabhakti Timur", jenis: "Perbuatan Melawan Hukum", tahun: "2018", status: "selesai", hasil: "Menang Upaya Kasasi", deskripsi: "Perkara perbuatan melawan hukum yang dimenangkan di Mahkamah Agung untuk PT. Saranabhakti Timur." },
    { nomor: "195/Pdt.G/2019/PN.Sda", jenis: "Wanprestasi", tahun: "2019", status: "selesai", hasil: "Menang", deskripsi: "Perkara wanprestasi yang dimenangkan di Pengadilan Negeri Surabaya." },
    { nomor: "502/Pdt.G/2019/PN.Smg", jenis: "Wanprestasi", tahun: "2019", status: "selesai", hasil: "Menang", deskripsi: "Perkara wanprestasi yang dimenangkan di Pengadilan Negeri Semarang." },
    // 1213/Pdt.G/2019/PN.Sby — DIHAPUS
    { nomor: "751/Pid.B/2020/PN.Sby", jenis: "Hukum Pidana", tahun: "2020", status: "selesai", hasil: "Putusan", deskripsi: "Perkara pidana yang telah diputus di Pengadilan Negeri Surabaya." },
    { nomor: "781 K/PDT/2020", jenis: "Hukum Perdata", tahun: "2020", status: "selesai", hasil: "Menang", deskripsi: "Perkara perdata yang dimenangkan di Mahkamah Agung." },
    { nomor: "272/Pdt.G/2020/PN.Sby", jenis: "Wanprestasi", tahun: "2020", status: "selesai", hasil: "Menang", deskripsi: "Perkara wanprestasi yang dimenangkan di Pengadilan Negeri Surabaya." },
    { nomor: "Indra Dyantokoh, Dkk", jenis: "Perselisihan Hubungan Industrial", tahun: "2020", status: "selesai", hasil: "Perdamaian (Disnaker Surabaya)", deskripsi: "Perselisihan hubungan industrial yang diselesaikan secara perdamaian di Disnaker Surabaya." },
    { nomor: "Edi Setyawan (Polres KP3 Tj. Perak)", jenis: "Hukum Pidana Ps. 303 KUHPidana", tahun: "2020", status: "selesai", hasil: "Tersangka", deskripsi: "Perkara pidana Pasal 303 KUHP di Polres KP3 Tanjung Perak Surabaya." },
    { nomor: "Edi Setyawan (Polda Jatim)", jenis: "Hukum Pidana", tahun: "2020", status: "selesai", hasil: "Tersangka", deskripsi: "Perkara pidana di Polda Jatim." },
    { nomor: "PT. Lintasbangun Persadajaya", jenis: "Layanan In House Lawyer", tahun: "2021", status: "berjalan", hasil: "Menangani seluruh permasalahan hukum litigasi & non litigasi", deskripsi: "Layanan in house lawyer untuk PT. Lintasbangun Persadajaya, distributor Semen Indonesia Jatim." },
    { nomor: "5549/Pdt.G/2022/PA.Sby", jenis: "Gugatan Pembagian Harta Waris", tahun: "2022", status: "selesai", hasil: "Menang", deskripsi: "Gugatan pembagian harta waris yang dimenangkan di Pengadilan Agama Surabaya." }
];

// ============================================================
// DATA BIDANG KEAHLIAN DENGAN DESKRIPSI
// ============================================================
const practiceAreas = [
    { id: "01", name: "Hukum Perikatan & Hukum Benda", desc: "Mengatur hubungan hukum antar pihak, termasuk perjanjian, utang-piutang, dan hak kepemilikan barang." },
    { id: "02", name: "Hukum Perdata Bisnis", desc: "Menyangkut sengketa bisnis, wanprestasi, dan pelanggaran kontrak dagang antar perusahaan." },
    { id: "03", name: "Hukum Pidana", desc: "Penanganan perkara pidana umum, pidana korporasi, dan tindak pidana khusus sesuai KUHP." },
    { id: "04", name: "Hukum Administrasi & Perijinan", desc: "Mengurus perijinan usaha, izin operasional, dan sengketa dengan instansi pemerintah." },
    { id: "05", name: "Hukum Perseroan / Perusahaan", desc: "Pendirian perusahaan, perubahan anggaran dasar, hingga likuidasi dan merger." },
    { id: "06", name: "Hukum Kepailitan & PKPU", desc: "Penanganan perkara kepailitan dan Penundaan Kewajiban Pembayaran Utang (PKPU)." },
    { id: "07", name: "Hak Atas Kekayaan Intelektual", desc: "Perlindungan hak cipta, merek, paten, desain industri, dan rahasia dagang." },
    { id: "08", name: "Hukum Pertanahan", desc: "Sengketa tanah, sertifikasi, hak atas tanah, dan perkara agraria lainnya." },
    { id: "09", name: "Hukum Perbankan & Pembiayaan", desc: "Perkara kredit macet, pembiayaan, dan sengketa dengan lembaga keuangan." },
    { id: "10", name: "Hukum Perlindungan Konsumen", desc: "Perlindungan hak-hak konsumen dan sengketa dengan pelaku usaha." },
    { id: "11", name: "Hukum Penanaman Modal", desc: "Konsultasi dan pendampingan investasi, PMA, dan PMDN sesuai regulasi." },
    { id: "12", name: "Hukum Dagang & Pengangkutan", desc: "Sengketa dagang, pengiriman barang, dan asuransi pengangkutan." },
    { id: "13", name: "Hukum Persaingan Usaha", desc: "Perkara monopoli, kartel, dan persaingan usaha tidak sehat lainnya." },
    { id: "14", name: "Hukum Perburuhan / Ketenagakerjaan", desc: "Penyelesaian PHK, perselisihan hubungan industrial, dan hak-hak pekerja." },
    { id: "15", name: "Hukum Waris", desc: "Pembagian harta waris, sengketa warisan, dan penetapan ahli waris." },
    { id: "16", name: "Penyelesaian Sengketa Alternatif", desc: "Mediasi, arbitrase, dan negosiasi di luar jalur litigasi pengadilan." }
];

// ============================================================
// RENDER PRACTICE AREAS DENGAN TOOLTIP
// ============================================================
function renderPracticeAreas() {
    const grid = document.getElementById('practiceGrid');
    if (!grid) return;

    grid.innerHTML = practiceAreas.map(item => `
        <div class="practice-item">
            <div class="practice-card">
                <span class="practice-number">${item.id}</span>
                <h3 class="practice-title">${item.name}</h3>
                <a href="#" class="practice-link">Selengkapnya →</a>
            </div>
            <div class="practice-tooltip">${item.desc}</div>
        </div>
    `).join('');
}

// ============================================================
// RENDER KASUS DENGAN MODAL POP-UP
// ============================================================
let currentFilter = 'all';

function renderCases(filter = 'all', limit = 6) {
    const grid = document.getElementById('experienceGrid');
    if (!grid) return;

    const filtered = filter === 'all' ? cases : cases.filter(c => c.status === filter);
    const toShow = filtered.slice(0, limit);

    const statusLabels = {
        selesai: 'Selesai',
        berjalan: 'Berjalan',
        banding: 'Banding',
        proses: 'Proses'
    };

    grid.innerHTML = toShow.map((c, index) => `
        <div class="experience-card" data-status="${c.status}" data-index="${index}">
            <div class="case-number">${c.nomor}</div>
            <h4>${c.jenis}</h4>
            <div class="case-meta">
                <span>${c.tahun}</span>
                <span class="status ${c.status}">${statusLabels[c.status] || c.status.toUpperCase()}</span>
            </div>
            <div class="case-result">${c.hasil}</div>
        </div>
    `).join('');

    document.querySelectorAll('.experience-card').forEach(card => {
        card.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const data = filtered[index];
            if (data) {
                openModal(data);
            }
        });
    });

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    if (filtered.length <= limit) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.innerHTML = `<span data-id="Lihat Semua Kasus" data-en="View All Cases">Lihat Semua Kasus</span> →`;
        loadMoreBtn.onclick = () => renderCases(filter, filtered.length);
    }
}

// ============================================================
// MODAL POP-UP FUNGSI
// ============================================================
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(data) {
    const statusLabels = {
        selesai: 'Selesai',
        berjalan: 'Berjalan',
        banding: 'Banding',
        proses: 'Proses'
    };

    modalContent.innerHTML = `
        <div class="modal-case-number">${data.nomor}</div>
        <h3 class="modal-title">${data.jenis}</h3>
        <div class="modal-detail">
            <div class="detail-item">
                <div class="label">Tahun</div>
                <div class="value">${data.tahun}</div>
            </div>
            <div class="detail-item">
                <div class="label">Status</div>
                <div class="value">${statusLabels[data.status] || data.status.toUpperCase()}</div>
            </div>
            <div class="detail-item" style="grid-column: 1 / -1;">
                <div class="label">Hasil</div>
                <div class="value">${data.hasil}</div>
            </div>
        </div>
        <div class="modal-description">
            ${data.deskripsi || 'Detail perkara ini tersedia untuk konsultasi lebih lanjut dengan tim kami.'}
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// ============================================================
// LAWYER MODAL POP-UP FUNGSI
// ============================================================
const lawyerModalOverlay = document.getElementById('lawyerModalOverlay');
const lawyerModalImage = document.getElementById('lawyerModalImage');
const lawyerModalName = document.getElementById('lawyerModalName');
const lawyerModalPosition = document.getElementById('lawyerModalPosition');
const lawyerModalNia = document.getElementById('lawyerModalNia');
const lawyerModalEducation = document.getElementById('lawyerModalEducation');
const lawyerModalExperience = document.getElementById('lawyerModalExperience');
const lawyerModalExpertise = document.getElementById('lawyerModalExpertise');
const lawyerModalClose = document.getElementById('lawyerModalClose');

function openLawyerModal(imageSrc, name, position, nia, education, experience, expertise) {
    lawyerModalImage.src = imageSrc;
    lawyerModalImage.alt = name;
    lawyerModalName.textContent = name;
    lawyerModalPosition.textContent = position;
    lawyerModalNia.textContent = nia || '—';
    lawyerModalEducation.textContent = education || '—';
    lawyerModalExperience.textContent = experience || '—';
    lawyerModalExpertise.textContent = expertise || '—';
    lawyerModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLawyerModal() {
    lawyerModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (lawyerModalClose) {
    lawyerModalClose.addEventListener('click', closeLawyerModal);
}

if (lawyerModalOverlay) {
    lawyerModalOverlay.addEventListener('click', function(e) {
        if (e.target === this) closeLawyerModal();
    });
}

// ============================================================
// FILTER KASUS
// ============================================================
document.querySelectorAll('.experience-filters button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.experience-filters button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderCases(currentFilter, 6);
    });
});

// ============================================================
// INIT KASUS
// ============================================================
renderCases('all', 6);

// ============================================================
// INIT PRACTICE AREAS
// ============================================================
document.addEventListener('DOMContentLoaded', renderPracticeAreas);

// ============================================================
// BAHASA TOGGLE
// ============================================================
let currentLang = 'id';

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelector('html').lang = lang === 'id' ? 'id' : 'en';

    document.querySelectorAll('[data-id][data-en]').forEach(el => {
        const text = lang === 'id' ? el.getAttribute('data-id') : el.getAttribute('data-en');
        if (text) {
            if (el.childNodes.length > 1 || el.querySelector('*')) {
                const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
                let node;
                while (node = walker.nextNode()) {
                    if (node.textContent.trim() !== '') {
                        const parent = node.parentNode;
                        let target = parent;
                        while (target && !target.hasAttribute('data-id')) {
                            target = target.parentNode;
                        }
                        if (target && target.hasAttribute('data-id')) {
                            const newText = lang === 'id' ? target.getAttribute('data-id') : target.getAttribute('data-en');
                            if (newText) node.textContent = newText;
                        }
                    }
                }
            } else {
                el.textContent = text;
            }
        }
    });

    document.getElementById('currentLangLabel').textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    document.title = lang === 'id' ?
        'NOVAN E. SAPUTRA & PARTNERS — Advokat & Konsultan Hukum' :
        'NOVAN E. SAPUTRA & PARTNERS — Advocates & Legal Consultants';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'id' ?
            'NOVAN E. SAPUTRA & PARTNERS adalah kantor hukum yang dibentuk oleh himpunan advokat berlisensi Peradi, hadir untuk membantu individu maupun perusahaan menyelesaikan permasalahan hukum.' :
            'NOVAN E. SAPUTRA & PARTNERS is a law firm formed by a group of PERADI licensed advocates, here to help individuals and companies resolve legal issues.';
    }

    document.querySelectorAll('.experience-filters button').forEach(btn => {
        const el = btn.querySelector('[data-id]');
        if (el) {
            const text = lang === 'id' ? el.getAttribute('data-id') : el.getAttribute('data-en');
            el.textContent = text;
        }
    });

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        const span = loadMoreBtn.querySelector('span');
        if (span) {
            const text = lang === 'id' ? span.getAttribute('data-id') : span.getAttribute('data-en');
            if (text) span.textContent = text;
        }
    }
}

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.dataset.lang;
        switchLanguage(lang);
    });
});

// ============================================================
// STATISTIK ANIMASI
// ============================================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        let current = 0;
        const increment = Math.ceil(target / 40);
        const duration = 1500;
        const stepTime = duration / 40;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = current + '+';
        }, stepTime);
    });
}

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
}

// ============================================================
// NAVBAR SCROLL
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================================
// HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
    navOverlay.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

if (navOverlay) {
    navOverlay.addEventListener('click', toggleMenu);
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) toggleMenu();
    });
});

// ============================================================
// SCROLL ANIMATION
// ============================================================
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, observerOptions);
animateElements.forEach(el => observer.observe(el));

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ============================================================
// KEYBOARD NAV
// ============================================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu.classList.contains('open')) toggleMenu();
        if (lawyerModalOverlay && lawyerModalOverlay.classList.contains('active')) closeLawyerModal();
        if (modalOverlay && modalOverlay.classList.contains('active')) closeModal();
    }
});

console.log('NOVAN & PARTNERS — Website Company Profile');
console.log('Total cases loaded: ' + cases.length);
