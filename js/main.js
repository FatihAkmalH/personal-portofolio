// ==========================================
// 1. VARIABEL GLOBAL & KONFIGURASI
// ==========================================
let translationsData = null;
let currentLang = localStorage.getItem('lang') || 'id'; 
let experienceData = null;
let projectsData = [];

const userPics = [
    '01.webp',
    'Afterclap-1.webp', 'Afterclap-2.webp', 'Afterclap-3.webp', 'Afterclap-4.webp', 'Afterclap-5.webp', 'Afterclap-6.webp', 'Afterclap-7.webp', 'Afterclap-8.webp', 'Afterclap-9.webp', 'Afterclap.webp',
    'Cranks-1.webp', 'Cranks-2.webp', 'Cranks.webp',
    'Delivery boy-1.webp', 'Delivery boy-2.webp', 'Delivery boy-3.webp', 'Delivery boy-4.webp', 'Delivery boy-5.webp', 'Delivery boy.webp',
    'E-commerce-1.webp', 'E-commerce-2.webp', 'E-commerce.webp',
    'Funny Bunny-1.webp', 'Funny Bunny-2.webp', 'Funny Bunny-3.webp', 'Funny Bunny-4.webp', 'Funny Bunny-5.webp', 'Funny Bunny-6.webp', 'Funny Bunny-7.webp', 'Funny Bunny-8.webp', 'Funny Bunny.webp',
    'Guacamole-1.webp', 'Guacamole-2.webp', 'Guacamole-3.webp', 'Guacamole.webp',
    'Juicy-1.webp', 'Juicy.webp',
    'No comments 3.webp', 'No comments 4.webp', 'No comments 5.webp', 'No comments 6.webp', 'No comments 7.webp', 'No comments 8.webp', 'No comments 9.webp',
    'No Comments-1.webp', 'No Comments-2.webp', 'No Comments-3.webp', 'No Comments.webp',
    'No gravity-1.webp', 'No gravity-2.webp', 'No gravity-3.webp', 'No gravity.webp',
    'OSLO-1.webp', 'OSLO-2.webp', 'OSLO-3.webp', 'OSLO-4.webp', 'OSLO-5.webp', 'OSLO-6.webp', 'OSLO-7.webp', 'OSLO-8.webp', 'OSLO-9.webp', 'OSLO-10.webp', 'OSLO-11.webp', 'OSLO-12.webp', 'OSLO-13.webp', 'OSLO-14.webp', 'OSLO.webp',
    'Teamwork-1.webp', 'Teamwork-2.webp', 'Teamwork-3.webp', 'Teamwork-4.webp', 'Teamwork-5.webp', 'Teamwork-6.webp', 'Teamwork-7.webp', 'Teamwork-8.webp', 'Teamwork.webp',
    'Upstream-1.webp', 'Upstream-2.webp', 'Upstream-3.webp', 'Upstream-4.webp', 'Upstream-5.webp', 'Upstream-6.webp', 'Upstream-7.webp', 'Upstream-8.webp', 'Upstream-9.webp', 'Upstream-10.webp', 'Upstream-11.webp', 'Upstream-12.webp', 'Upstream-13.webp', 'Upstream-14.webp', 'Upstream-15.webp', 'Upstream-16.webp', 'Upstream-17.webp', 'Upstream.webp'
];

// ==========================================
// 2. INITIALIZATION (BOOTSTRAPPER)
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initRouter();
    initMobileMenu();
    
    // Wajib di-load pertama agar terjemahan siap sebelum komponen lain dirender
    await loadTranslationsData(); 
    initLanguageToggle();
    
    // Load seluruh data JSON secara asinkron
    loadSkillsData();    
    loadExperienceData();
    loadProjectsData(); 
    loadContactData();
});

// ==========================================
// 3. UTILITY FUNCTIONS
// ==========================================
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Gagal memuat data dari ${url}:`, error);
        return null; 
    }
}

function getSortableDate(dateString) {
    const yearMatch = dateString.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0]) : 0;
    
    const strLower = dateString.toLowerCase();
    let month = 0;
    if (strLower.includes("jan")) month = 1;
    else if (strLower.includes("feb")) month = 2;
    else if (strLower.includes("mar")) month = 3;
    else if (strLower.includes("apr")) month = 4;
    else if (strLower.includes("mei") || strLower.includes("may")) month = 5;
    else if (strLower.includes("jun")) month = 6;
    else if (strLower.includes("jul")) month = 7;
    else if (strLower.includes("agu") || strLower.includes("aug")) month = 8;
    else if (strLower.includes("sep")) month = 9;
    else if (strLower.includes("okt") || strLower.includes("oct")) month = 10;
    else if (strLower.includes("nov")) month = 11;
    else if (strLower.includes("des") || strLower.includes("dec")) month = 12;
    
    return (year * 100) + month;
}

function parseDateForModal(dateString) {
    const yearMatch = dateString.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0] : '';
    const monthMatch = dateString.match(/[a-zA-Z]+/);
    const month = monthMatch ? monthMatch[0] : '';
    return { year, month };
}

// ==========================================
// 4. CORE: THEME & ROUTER
// ==========================================
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(themeBtn) themeBtn.textContent = '☀️';
    } else {
        if(themeBtn) themeBtn.textContent = '🌙';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = '☀️';
            }
        });
    }
}

function initRouter() {
    const handleRoute = () => {
        let hash = window.location.hash || '#home';
        const targetSection = document.querySelector(hash);
        
        if (!targetSection) {
            window.location.hash = '#home';
            return;
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === hash) link.classList.add('active');
            else link.classList.remove('active');
        });

        const activeSection = document.querySelector('.spa-section.active');
        if (activeSection === targetSection) return;

        if (activeSection) {
            gsap.to(activeSection, {
                opacity: 0, y: 20, duration: 0.3, 
                onComplete: () => {
                    activeSection.classList.remove('active');
                    targetSection.classList.add('active');
                    window.scrollTo(0, 0); 
                    gsap.fromTo(targetSection, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
                }
            });
        } else {
            targetSection.classList.add('active');
            gsap.fromTo(targetSection, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
        }
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); 
}

// ==========================================
// MOBILE MENU (HAMBURGER) LOGIC
// ==========================================
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburgerBtn && navLinks) {
        // Toggle menu saat hamburger diklik
        hamburgerBtn.addEventListener('click', (e) => {
            navLinks.classList.toggle('active');
            e.stopPropagation(); // Mencegah event klik bocor ke window
        });

        // Tutup menu saat salah satu link diklik
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Tutup menu jika pengguna mengklik area luar navbar
        window.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !e.target.closest('.header-nav')) {
                navLinks.classList.remove('active');
            }
        });
    }
}

// ==========================================
// 5. CORE: MULTI-LANGUAGE (i18n)
// ==========================================
async function loadTranslationsData() {
    translationsData = await fetchData('data/translation.json'); 
    if (translationsData) {
        updateLanguageIcon();
        updateStaticText();
    }
}

function initLanguageToggle() {
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            localStorage.setItem('lang', currentLang); 
            
            updateLanguageIcon();
            updateStaticText();
            
            // Render ulang komponen dinamis jika data sudah tersedia
            if (experienceData) {
                const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-target');
                renderTimeline(activeTab);
            }
            if (projectsData.length > 0) renderBentoGrid();
        });
    }
}

function updateLanguageIcon() {
    const langIcon = document.getElementById('lang-icon');
    if (langIcon) {
        langIcon.src = `assets/images/lang-${currentLang}.webp`; 
        langIcon.alt = currentLang.toUpperCase();
    }
}

function updateStaticText() {
    if (!translationsData) return;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translationsData[currentLang] && translationsData[currentLang][key]) {
            element.textContent = translationsData[currentLang][key];
        }
    });
}

// ==========================================
// 6. MODULE: SKILLS & EXPERIENCE
// ==========================================
async function loadSkillsData() {
    const skillsData = await fetchData('data/skills.json');
    const container = document.getElementById('skills-container');
    
    if (skillsData && container) {
        container.innerHTML = ''; 
        skillsData.forEach(skill => {
            const skillHTML = `
                <span class="badge">
                    <i class="ph ${skill.icon}" style="font-size: 1.2rem;"></i> ${skill.name}
                </span>
            `;
            container.insertAdjacentHTML('beforeend', skillHTML);
        });
    }
}

async function loadExperienceData() {
    experienceData = await fetchData('data/experience.json');
    if (experienceData) {
        initTabs();
        renderTimeline('experience');
    } else {
        document.getElementById('timeline-carousel').innerHTML = `
            <div style="text-align:center; width:100%; color:var(--accent-secondary);">
                Gagal memuat data pengalaman.
            </div>
        `;
    }
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderTimeline(e.target.getAttribute('data-target'));
        });
    });
}

function renderTimeline(category) {
    const container = document.getElementById('timeline-vertical');
    if (!container) return;
    
    container.innerHTML = ''; 
    const dataList = experienceData[currentLang][category];

    if (!dataList || dataList.length === 0) {
        container.innerHTML = `<p>Belum ada data untuk kategori ini.</p>`;
        return;
    }

    dataList.forEach((item, index) => {
        const descList = item.description.map(descItem => `<li>${descItem}</li>`).join('');
        const html = `
            <div class="timeline-item" id="item-${index}">
                <div class="tl-period">${item.period}</div>
                <div class="tl-role">${item.role}</div>
                <div class="tl-inst">${item.institution}</div>
                <ul class="tl-desc">${descList}</ul>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });

    gsap.fromTo('.timeline-item', 
        { opacity: 0, x: -20 }, 
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.15, ease: "power2.out" }
    );
}

// ==========================================
// 7. MODULE: PROJECTS & MODAL
// ==========================================
async function loadProjectsData() {
    const rawData = await fetchData('data/projects.json');
    if (rawData) {
        projectsData = rawData.sort((a, b) => getSortableDate(b.date) - getSortableDate(a.date));
        renderBentoGrid();
        initModalInteractions();
    } else {
        document.getElementById('bento-portfolio').innerHTML = `
            <p style="text-align:center; grid-column: 1 / -1; color: var(--accent-secondary);">Gagal memuat proyek.</p>
        `;
    }
}

function renderBentoGrid() {
    const container = document.getElementById('bento-portfolio');
    if (!container) return;
    
    container.innerHTML = ''; 
    projectsData.forEach((project, index) => {
        let sizeClass = '';
        const titleLength = project.title.length;
        
        if (titleLength >= 24) sizeClass = 'bento-large';
        else if (titleLength >= 12) sizeClass = 'bento-wide';
        else sizeClass = (index % 4 === 0) ? 'bento-tall' : ''; 
        
        const avatarImg = userPics[index % userPics.length];
        const cardHTML = `
            <div class="bento-item glass-panel ${sizeClass}" data-id="${project.id}">
                <div class="bento-content">
                    <img src="assets/Userpics/${avatarImg}" alt="Avatar" class="bento-avatar" loading="lazy">
                    <span class="bento-title">${project.title}</span>
                    <span class="bento-category">${project.category}</span>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function initModalInteractions() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    const bentoContainer = document.getElementById('bento-portfolio');
    
    if (!modal || !bentoContainer) return;

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalTech = document.getElementById('modal-tech');
    const modalDesc = document.getElementById('modal-desc');
    const modalYear = document.getElementById('modal-date-year');
    const modalMonth = document.getElementById('modal-date-month');
    
    // HAPUS definisi linkLive dan linkGithub dari sini

    bentoContainer.addEventListener('click', (e) => {
        const clickedCard = e.target.closest('.bento-item');
        if (clickedCard) {
            const project = projectsData.find(p => p.id === clickedCard.getAttribute('data-id'));
            
            if (project) {
                modalImg.src = project.image_modal.replace('../', '');
                modalImg.alt = project.title;
                modalTitle.textContent = project.title;
                modalTech.textContent = project.technologies.join(', ');
                modalDesc.textContent = project.description[currentLang] || project.description['id'];
                
                const parsedDate = parseDateForModal(project.date);
                modalYear.textContent = parsedDate.year;
                modalMonth.textContent = parsedDate.month;
                
                // Ubah parameter pertama menjadi ID (String), bukan Element
                const checkAndBindLink = (btnId, linkValue, typeName) => {
                    // Cari elemen secara segar setiap kali diklik
                    const btnElement = document.getElementById(btnId);
                    if (!btnElement) return; // Safety check

                    const newBtn = btnElement.cloneNode(true);
                    btnElement.parentNode.replaceChild(newBtn, btnElement);
                    
                    // Fallback aman jika link di JSON kosong/undefined
                    const safeLink = linkValue || ''; 
                    const lowerLink = safeLink.toLowerCase();
                    
                    const isRestricted = !safeLink || lowerLink.includes('unavailable') || lowerLink.includes('private') || 
                                         lowerLink.includes('internal') || lowerLink.includes('not active') ||
                                         lowerLink.includes('demo not');

                    if (isRestricted) {
                        newBtn.style.opacity = '0.7';
                        newBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            Swal.fire({
                                icon: 'info', title: 'Akses Terbatas',
                                text: `Maaf, ${typeName} untuk proyek "${project.title}" berstatus: Terbatas / Private.`,
                                confirmButtonColor: 'var(--accent-primary)',
                                background: 'var(--bg-color)', color: 'var(--text-primary)'
                            });
                        });
                    } else {
                        newBtn.style.opacity = '1';
                        newBtn.addEventListener('click', (e) => {
                            window.open(safeLink, '_blank');
                            e.preventDefault();
                        });
                    }
                };

                // Panggil menggunakan ID elemen di HTML
                checkAndBindLink('modal-link-live', project.link, 'Live Demo');
                checkAndBindLink('modal-link-github', project.github_link, 'Repository GitHub');
                
                modal.classList.add('active');
            }
        }
    });

    const closeModal = () => modal.classList.remove('active');
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}

// ==========================================
// 8. MODULE: CONTACT PAGE
// ==========================================
async function loadContactData() {
    const contactData = await fetchData('data/contact.json');
    if (contactData) {
        const socialsContainer = document.getElementById('contact-socials');
        if (socialsContainer) {
            socialsContainer.innerHTML = '';
            contactData.socials.forEach(social => {
                const socialHTML = `
                    <a href="${social.url}" target="_blank" class="social-circle" aria-label="${social.name}" title="${social.name}">
                        <i class="ph ${social.icon}"></i>
                    </a>
                `;
                socialsContainer.insertAdjacentHTML('beforeend', socialHTML);
            });
        }

        const gridContainer = document.getElementById('contact-info-grid');
        if (gridContainer) {
            gridContainer.innerHTML = '';
            
            // Menggunakan key dari translation.json
            const cardsInfo = [
                { key: "contact_label_location", value: contactData.location, link: "#" + contactData.location },
                { key: "contact_label_email", value: contactData.email, link: "mailto:" + contactData.email },
                // { key: "contact_label_phone", value: contactData.phone, link: "wa.me/" + contactData.whatsapp.replace(/\s+/g, '') },
                { key: "contact_label_hours", value: contactData.hours, link: "#" }
            ];

            cardsInfo.forEach(info => {
                const isLink = info.link !== "#";
                const wrapperTag = isLink ? 'a' : 'div';
                const hrefAttr = isLink ? `href="${info.link}" target="_blank"` : '';
                
                // Ambil label default berdasarkan bahasa yang sedang aktif
                const defaultLabel = (translationsData && translationsData[currentLang]) 
                                     ? translationsData[currentLang][info.key] : "";

                const cardHTML = `
                    <${wrapperTag} ${hrefAttr} class="contact-card">
                        <div class="cc-left">
                            <span class="cc-label" data-i18n="${info.key}">${defaultLabel}</span>
                            <span class="cc-value">${info.value}</span>
                        </div>
                        <div class="cc-icon"><i class="ph ph-arrow-up-right"></i></div>
                    </${wrapperTag}>
                `;
                gridContainer.insertAdjacentHTML('beforeend', cardHTML);
            });
        }
    }
}