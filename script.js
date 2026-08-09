// ===== DATA KASUS =====
const cases = [
    { nomor: "2190/Pdt.G/2012/PA.Sby", jenis: "Eksekusi Tanah dan Bangunan", tahun: "2012", status: "selesai",
        hasil: "Menang (Pemohon Eksekusi)" },
    { nomor: "535/Pdt.G/2013/PN.Sby", jenis: "Perbuatan Melanggar Hukum", tahun: "2013", status: "selesai",
        hasil: "Menang / Berkekuatan Hukum Tetap" },
    { nomor: "LP/885/B/VIII/2013/Restabes Sby", jenis: "Hukum Pidana", tahun: "2013", status: "selesai",
        hasil: "Gelar Perkara" },
    { nomor: "5945/Pdt.G/2014/PA.Sby", jenis: "Perlawanan", tahun: "2014", status: "selesai", hasil: "Menang" },
    { nomor: "98/Pdt.G/2014/PN.Jmr", jenis: "Perbuatan Melanggar Hukum", tahun: "2014", status: "banding",
        hasil: "Upaya Hukum Banding" },
    { nomor: "190/Pdt.G/2014/PN.Sby", jenis: "Wanprestasi", tahun: "2014", status: "selesai", hasil: "Menang" },
    { nomor: "472/Pdt.G/2014/PN.Sby", jenis: "Perbuatan Melanggar Hukum", tahun: "2014", status: "selesai",
        hasil: "Dading/Damai" },
    { nomor: "22/Pdt.G/2015/PN.JBG", jenis: "Perbuatan Melanggar Hukum", tahun: "2015", status: "banding",
        hasil: "Upaya Hukum Banding" },
    { nomor: "36/Pdt.G/2015/PN.Sbr", jenis: "Perbuatan Melanggar Hukum", tahun: "2015", status: "selesai",
        hasil: "Menang" },
    { nomor: "50/Pdt.G/2015/PN.JBG", jenis: "Wanprestasi", tahun: "2015", status: "selesai", hasil: "Dading/Damai" },
    { nomor: "110/G/2015/PTUN.Sby", jenis: "Sengketa Tanah", tahun: "2015", status: "banding",
        hasil: "Upaya Hukum Banding" },
    { nomor: "231/Pdt.G/2015/PTA.Sby", jenis: "Sengketa Waris/Perlawanan", tahun: "2015", status: "selesai",
        hasil: "Menang" },
    { nomor: "LP/215/V/2015/Jatim/Res JBG", jenis: "Hukum Pidana", tahun: "2015", status: "selesai",
        hasil: "Damai/SP3" },
    { nomor: "LPB/1380/IX/2015/UM/Jatim", jenis: "Hukum Pidana", tahun: "2015", status: "proses",
        hasil: "Dalam Pemeriksaan Penyidik" },
    { nomor: "LPB/1404/IX/2015/UM/Jatim", jenis: "Hukum Pidana", tahun: "2015", status: "selesai", hasil: "SP3" },
    { nomor: "07/PDT/2016/PT.Sby", jenis: "Wanprestasi", tahun: "2016", status: "selesai", hasil: "Menang" },
    { nomor: "176/PDT/2016/PT.BDG", jenis: "Wanprestasi", tahun: "2016", status: "selesai", hasil: "Menang" },
    { nomor: "Lutfi Herdyansah", jenis: "Hukum Perbankan", tahun: "2016", status: "selesai", hasil: "Klaim Nasabah" },
    { nomor: "CV. Logam Abadi", jenis: "Hukum Perdata", tahun: "2016", status: "berjalan", hasil: "Konsultan" },
    { nomor: "PT. Barokta Fina", jenis: "Hukum Perseroan", tahun: "2016", status: "berjalan",
    hasil: "Konsultan Hukum" },
    { nomor: "Yayasan Kyai Mojo", jenis: "Hukum Perdata", tahun: "2016", status: "berjalan",
    hasil: "Konsultan Hukum" },
    { nomor: "PT. Chal Jaya", jenis: "Hukum Perdata", tahun: "2016", status: "berjalan", hasil: "Konsultan Hukum" },
    { nomor: "PT. BPRS Kota Mojokerto", jenis: "Somasi, Non Litigasi, Litigasi, Sengketa Ekonomi Syariah",
        tahun: "2016", status: "berjalan", hasil: "Penyelesaian Sengketa Kredit" },
    { nomor: "PT. BMH Technologies (PMA)", jenis: "Legal Opinion", tahun: "2016", status: "selesai",
        hasil: "Konsultasi" },
    { nomor: "Kiyoyuki Takeda (PMA)", jenis: "Legal Opinion -- Legal Audit", tahun: "2016", status: "selesai",
        hasil: "Konsultasi" },
    { nomor: "CV. Prima Karya", jenis: "Legal Opinion", tahun: "2016", status: "selesai", hasil: "Konsultasi" },
    { nomor: "Ny. Sriyatun", jenis: "Somasi", tahun: "2016", status: "selesai", hasil: "Advokasi" },
    { nomor: "K/LP/275/XII/2016/Jatim/SPK", jenis: "Hukum Pidana", tahun: "2016", status: "selesai", hasil: "SP3" },
    { nomor: "3339 K/PDT/2016", jenis: "Hukum Perdata", tahun: "2016", status: "proses", hasil: "Pemeriksaan Kasasi" },
    { nomor: "301 K/AG/2016", jenis: "Hukum Waris", tahun: "2016", status: "selesai", hasil: "Menang" },
    { nomor: "214/PDT/2016/PT.Sby", jenis: "Hukum Perdata", tahun: "2016", status: "proses",
        hasil: "Pemeriksaan Banding" },
    { nomor: "13/Pdt.G/2017/PN.Bil", jenis: "Hukum Perbankan", tahun: "2017", status: "selesai",
        hasil: "Damai (dengan LPS)" },
    { nomor: "M. Lutfi Shofiq, Dkk", jenis: "Hukum Perdata -- Agraria", tahun: "2017", status: "banding",
        hasil: "Upaya Hukum Banding" },
    { nomor: "LPB/239/II/2017/UM/Jatim", jenis: "Hukum Pidana", tahun: "2017", status: "proses",
        hasil: "Pemeriksaan" },
    { nomor: "LPB/271/III/2017/UM/Jatim", jenis: "Hukum Pidana", tahun: "2017", status: "proses",
        hasil: "Pemeriksaan" },
    { nomor: "627/Pdt.G/2017/PN.Sby", jenis: "Perbuatan Melanggar Hukum", tahun: "2017", status: "proses",
        hasil: "Pemeriksaan" },
    { nomor: "LP/83/V/2017/Jatim/Res.SPG", jenis: "Hukum Pidana", tahun: "2017", status: "selesai",
        hasil: "Gelar Perkara" },
    { nomor: "283/Pdt/2018/PT.Sby", jenis: "Hukum Perdata", tahun: "2018", status: "selesai", hasil: "Menang" },
    { nomor: "Tn. Fauzi dan Ny. Inayah", jenis: "Hukum Perdata", tahun: "2018", status: "selesai",
        hasil: "Advokasi ke PT. KAI" },
    { nomor: "Cawali-Cawawali Mojokerto 2018", jenis: "Hukum Pemilu dan Administrasi Daerah", tahun: "2018",
        status: "selesai", hasil: "Pilkada Mojokerto Tahun 2018" },
    { nomor: "Ny. Mimik Lestari, S.H.", jenis: "Hukum Pemilu", tahun: "2018", status: "selesai",
        hasil: "Tidak Cukup Bukti" },
    { nomor: "Ny. Suratmi", jenis: "Hukum Perbankan", tahun: "2018", status: "selesai", hasil: "Somasi" },
    { nomor: "332/Pdt.G/2018/PN.Sby", jenis: "Hukum Perdata", tahun: "2018", status: "selesai", hasil: "Menang" },
    { nomor: "H. Kaselan", jenis: "Hukum Perbankan dan Likuidasi", tahun: "2018", status: "selesai",
        hasil: "Pemohon" },
    { nomor: "PT. Saranabhakti Timur", jenis: "Perbuatan Melawan Hukum", tahun: "2018", status: "selesai",
        hasil: "Menang Upaya Kasasi" },
    { nomor: "195/Pdt.G/2019/PN.Sda", jenis: "Wanprestasi", tahun: "2019", status: "selesai", hasil: "Menang" },
    { nomor: "502/Pdt.G/2019/PN.Smg", jenis: "Wanprestasi", tahun: "2019", status: "selesai", hasil: "Menang" },
    { nomor: "1213/Pdt.G/2019/PN.Sby", jenis: "Perbuatan Melawan Hukum", tahun: "2019", status: "berjalan",
        hasil: "On Progress" },
    { nomor: "751/Pid.B/2020/PN.Sby", jenis: "Hukum Pidana", tahun: "2020", status: "selesai", hasil: "Putusan" },
    { nomor: "781 K/PDT/2020", jenis: "Hukum Perdata", tahun: "2020", status: "selesai", hasil: "Menang" },
    { nomor: "272/Pdt.G/2020/PN.Sby", jenis: "Wanprestasi", tahun: "2020", status: "berjalan",
    hasil: "On Progress" },
    { nomor: "Indra Dyantokoh, Dkk", jenis: "Perselisihan Hubungan Industrial", tahun: "2020", status: "selesai",
        hasil: "Perdamaian (Disnaker Surabaya)" },
    { nomor: "Edi Setyawan (Polres KP3 Tj. Perak)", jenis: "Hukum Pidana Ps. 303 KUHPidana", tahun: "2020",
        status: "selesai", hasil: "Tersangka" },
    { nomor: "Edi Setyawan (Polda Jatim)", jenis: "Hukum Pidana", tahun: "2020", status: "selesai",
        hasil: "Tersangka" },
    { nomor: "PT. Lintasbangun Persadajaya", jenis: "Layanan In House Lawyer", tahun: "2021", status: "berjalan",
        hasil: "Menangani seluruh permasalahan hukum litigasi & non litigasi" },
    { nomor: "5549/Pdt.G/2022/PA.Sby", jenis: "Gugatan Pembagian Harta Waris", tahun: "2022", status: "selesai",
        hasil: "Menang" }
];

// ===== RENDER KASUS =====
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

    grid.innerHTML = toShow.map(c => `
            <div class="experience-card" data-status="${c.status}">
                <div class="case-number">${c.nomor}</div>
                <h4>${c.jenis}</h4>
                <div class="case-meta">
                    <span>${c.tahun}</span>
                    <span class="status ${c.status}">${statusLabels[c.status] || c.status.toUpperCase()}</span>
                </div>
                <div class="case-result">${c.hasil}</div>
            </div>
        `).join('');

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    if (filtered.length <= limit) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.innerHTML = `<span data-id="Lihat Semua Kasus" data-en="View All Cases">Lihat Semua Kasus</span>`;
        loadMoreBtn.onclick = () => renderCases(filter, filtered.length);
    }
}

// ===== FILTER KASUS =====
document.querySelectorAll('.experience-filters button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.experience-filters button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderCases(currentFilter, 6);
    });
});

// ===== INIT KASUS =====
renderCases('all', 6);

// ===== STATISTIK ANIMASI =====
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + '+';
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + '+';
                        }
                    }, 25);
                });
            }
        });
    }, { threshold: 0.3 });

    if (statNumbers.length > 0) {
        observer.observe(statNumbers[0].closest('.stats-section'));
    }
}

// ===== HERO SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentIndex = 0;

    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(0);
    setInterval(nextSlide, 5000);
}

// ===== BAHASA TOGGLE (DROPDOWN) =====
let currentLang = 'id';

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelector('html').lang = lang === 'id' ? 'id' : 'en';

    // Update all text elements
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

    // Update dropdown button
    document.getElementById('currentLangLabel').textContent = lang === 'id' ? 'ID' : 'EN';

    // Update options
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update title
    document.title = lang === 'id' ?
        'NOVAN E. SAPUTRA & PARTNERS — Advokat & Konsultan Hukum' :
        'NOVAN E. SAPUTRA & PARTNERS — Advocates & Legal Consultants';

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'id' ?
            'NOVAN E. SAPUTRA & PARTNERS adalah kantor hukum yang dibentuk oleh himpunan advokat berlisensi Peradi, hadir untuk membantu individu maupun perusahaan menyelesaikan permasalahan hukum.' :
            'NOVAN E. SAPUTRA & PARTNERS is a law firm formed by a group of PERADI licensed advocates, here to help individuals and companies resolve legal issues.';
    }

    // Update filter buttons
    document.querySelectorAll('.experience-filters button').forEach(btn => {
        const el = btn.querySelector('[data-id]');
        if (el) {
            const text = lang === 'id' ? el.getAttribute('data-id') : el.getAttribute('data-en');
            el.textContent = text;
        }
    });

    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        const span = loadMoreBtn.querySelector('span');
        if (span) {
            const text = lang === 'id' ? span.getAttribute('data-id') : span.getAttribute('data-en');
            if (text) span.textContent = text;
        }
    }
}

// ===== DROPDOWN EVENTS =====
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            switchLanguage(opt.dataset.lang);
            langDropdown.classList.remove('active');
        });
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== HAMBURGER MENU =====
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

// ===== SCROLL ANIMATION =====
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, observerOptions);
animateElements.forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL =====
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

// ===== KEYBOARD NAV =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) toggleMenu();
});

// ===== INIT =====
initHeroSlider();
animateStats();

console.log('NOVAN E. SAPUTRA & PARTNERS — Website Company Profile');
console.log('Total cases loaded: ' + cases.length);
