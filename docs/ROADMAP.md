# ROADMAP.md

# Personal Portfolio SPA
## Development Roadmap & AI Prompting Guide

Version : 1.0
Status : Planning

---

## 🤖 SYSTEM INSTRUCTIONS FOR AI AGENT
1. **Do NOT generate the entire project at once.** This will exceed output token limits and break the context.
2. Follow the phases strictly in order.
3. Wait for the user to say **"Proceed to Phase [X]"** before generating the code for that specific phase.
4. After completing a phase, check off the status (e.g., from ⬜ Not Started to ℹ️ not done) in your internal memory and wait for user review.

---

# Project Goal

Membangun Personal Portfolio bergaya Single Page Application (SPA) yang modern menggunakan:
- HTML5 (Semantic)
- CSS3 / Bootstrap 5 (Layouting)
- Vanilla JavaScript (ES6+)
- JSON (sebagai Database & Multi-bahasa)
Tanpa backend, tanpa database server, dan murni Static Web.

---

# Development Principles

Setiap fase harus memenuhi:
✔ Mobile First
✔ Glassmorphism Aesthetic
✔ Dark Mode Ready
✔ Data Driven Architecture (via JSON)
✔ Multi-language Native (Tanpa API Eksternal)
✔ Reusable Components
✔ Performance First
✔ Accessibility (a11y)

---

# Phase 1 — Project Initialization

Status
ℹ️ not done

Target
Menyiapkan struktur project dan dependensi dasar.

Task
- Membuat struktur folder (`css/`, `js/`, `data/`, `assets/`).
- Membuat `index.html` dengan struktur Semantic HTML (Header, Main, Footer).
- Memasang Bootstrap 5 (hanya untuk Grid & Utility, via CDN).
- Menambahkan Google Fonts (Vujahday Script & Chiron Hei HK).
- Memasang library Icon (misal: Phosphor Icons atau Bootstrap Icons).
- karna bertipe SPA buat 1 file agar saat live server active dan auto reload page, tampilan tidak error, mungkin dapat gunakan _redirects seperti untuk netlify

Deliverable
Website (Blank page) dapat dijalankan tanpa error di console.

---

# Phase 2 — Design System (CSS)

Status
ℹ️ not done

Target
Membuat pondasi UI dan Design Tokens.

Task
- Setup `css/style.css`.
- Mendefinisikan CSS Variables (Color Palette Light/Dark).
- Mendefinisikan Typography Utilities.
- Membuat global resets dan custom scrollbar.
- Membuat utility class `.glass` (Glassmorphism rules).
- Mengimplementasikan fixed SVG Background Pattern.

Deliverable
Design System (CSS) selesai dan siap diaplikasikan.

---

# Phase 3 — JSON Infrastructure

Status
ℹ️ not done

Target
Membuat file database statis.

Task
- Membuat `data/projects.json` sesuai skema di DATA.md.
- Membuat `data/translations.json` sesuai skema di DATA.md.
- Membuat `data/experience.json` sesuai skema di DATA.md.

Deliverable
Seluruh JSON siap dipanggil oleh JavaScript.

---

# Phase 4 — Core JavaScript

Status
ℹ️ not done

Target
Membuat pondasi logika aplikasi.

Task
- Setup `js/main.js` dan `js/language.js`.
- Membuat fungsi async untuk memuat konfigurasi/JSON.
- Membuat state management sederhana untuk memori tema (Theme) dan bahasa (Lang).
- Membuat Local Storage manager.

Deliverable
Website sudah memiliki pondasi script tanpa error.

---

# Phase 5 — Header & Hero Section

Status
ℹ️ not done

Target
Membangun tampilan Landing Page (Hero).

Task
- Membangun Navbar (Logo kiri, Toggle Theme & Lang di kanan).
- Membangun Hero Section (Split layout 50/50).
- Membangun Tipografi Headline & CTA Buttons.
- Membangun Bento-grid / Visual image di sisi kanan gunakan (./assets/images/hero-photo.webp) yang dipecah jadi bento grid.

Deliverable
Hero Section dan Navbar selesai secara statis.

---

# Phase 6 — About & Experience Section

Status
ℹ️ not done

Target
Membangun Carousel/Tab Experience.

Task
- Membangun layout section About.
- Membangun UI Tabs (Education, Experience, Organization).
- Membangun UI Vertical Timeline Component (Garis, Titik, Text).
- Menulis logika JS untuk *tab switching* dan me-render list dari `experience.json`.

Deliverable
Experience section interaktif dan memuat data dinamis. ingat kalau sudah menggunakan SPA, baca walkthrough.md

---

# Phase 7 — Project Portfolio Section

Status
ℹ️ not not done

Target
Membangun grid galeri proyek.

Task
- Membangun UI CSS Grid untuk penempatan kartu.
- Membangun UI Project Card (`.glass`, Thumbnail, Title, CTA).
- Menulis logika JS untuk me-render daftar kartu berdasarkan `projects.json`.
- Menerapkan efek hover (TranslateY & Box-shadow).
- Pada card project urutkan sesuai tahun terbaru ke lama.

Deliverable
Galeri proyek selesai dirender via JSON.

---

# Phase 8 — Project Pop-up Modal

Status
ℹ️ not done

Target
Membangun sistem Modal detail proyek.

Task
- Membangun struktur HTML Modal (Overlay, Container, Content, Close Button).
- Membangun interaksi transisi CSS (`@keyframes fadeIn`).
- Menulis logika JS untuk open/close modal.
- Menulis logika JS untuk menginjeksi data proyek secara dinamis ke dalam modal berdasarkan ID kartu yang diklik.

Deliverable
Modal berfungsi penuh, dinamis, dan bergaya Glassmorphism (dengan optimasi layout dan kontras).

---

# Phase 9 — Multi-Language Integration (i18n)

Status
ℹ️ not done

Target
Menerapkan fitur 2 Bahasa (ID/EN).

Task
- Memastikan semua teks di `index.html` memiliki atribut `data-i18n`.
- Melengkapi logika di `js/language.js` untuk me- *replace* teks.
- Menghubungkan toggle button di Navbar dengan fungsi ganti bahasa.
- Memastikan *fallback* bahasa default berjalan mulus.

Deliverable
Bahasa website berubah seketika (realtime) saat toggle diklik.

---

# Phase 10 — Dark Mode Integration

Status
⬜ Not Started

Target
Menerapkan transisi tema terang/gelap.

Task
- Menggabungkan CSS Variables `[data-theme="dark"]` ke elemen toggle.
- Menyimpan preferensi di Local Storage.
- Memastikan background SVG dan elemen Glassmorphism beradaptasi dengan Dark Mode.

Deliverable
Dark Mode bekerja halus tanpa kedipan (*flash*).

---

# Phase 11 — Performance Optimization

Status
⬜ Not Started

Target
Website memuat dengan sangat cepat.

Task
- Terapkan `loading="lazy"` pada seluruh gambar.
- Pastikan semua gambar menggunakan format WebP.
- Terapkan preload untuk Google Fonts.
- Implementasi Loading State (Skeleton/Spinner) saat Fetch API JSON berjalan.

Deliverable
Optimasi resource selesai.

---

# Phase 12 — SEO & Social Meta Tags

Status
⬜ Not Started

Target
Website siap dibagikan ke internet.

Task
- Menambahkan Title & Meta Description.
- Menambahkan Open Graph (OG) Tags (Image, URL, Title) untuk preview LinkedIn/WhatsApp.
- Menambahkan Favicon.

Deliverable
SEO statis siap.

---

# Phase 13 — Accessibility (a11y)

Status
⬜ Not Started

Target
Website ramah penyandang disabilitas (Screen Reader & Keyboard nav).

Task
- Memastikan struktur Semantic HTML terurut.
- Menambahkan Focus Indicator / Focus Ring kustom.
- Menambahkan `aria-label` pada tombol Icon (Close Modal, Theme Toggle, dsb).
- Mengamankan *Focus Trap* saat modal terbuka (opsional/direkomendasikan).

Deliverable
Accessibility compliance tercapai.

---

# Phase 14 — Responsive & Cross-Browser Testing

Status
⬜ Not Started

Target
Tidak ada UI yang hancur di berbagai layar dan browser.

Task
- Testing Mobile (< 480px).
- Testing Tablet Portrait & Landscape (480px - 1024px).
- Testing Desktop (> 1024px).
- Testing di Chrome, Edge, Firefox, dan Safari.

Deliverable
Cross-device & Cross-browser support selesai.

---

# Phase 15 — QA & Fallback Testing

Status
⬜ Not Started

Checklist
- JSON Load Error (Apakah fallback text muncul?).
- Offline Mode (Bagaimana tampilan web saat gagal load data?).
- Klik di luar area Modal menutup modal.
- Tab aktif pada Experience sesuai dengan data.
- Tidak ada Console Error.

Deliverable
Semua *bug* dan potensi *crash* ditangani.

---

# Phase 16 — Lighthouse Optimization

Status
⬜ Not Started

Target
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Deliverable
Website Production Ready.

---

# Phase 17 — Final Review & Deployment

Status
⬜ Not Started

Checklist
- Semua halaman/elemen selesai.
- Tidak ada *dead link* (link mati).
- Tidak ada *hardcode* data (Semua data dari JSON/DATA.md).
- Animasi konsisten.
- Desain mengikuti panduan UI.md.

Deliverable
Version 1.0 Release Candidate. Siap Push ke GitHub & Deploy ke Netlify/Vercel.

---

# Definition of not done (DoD)
Sebuah fase dianggap selesai apabila:
- Seluruh task pada fase selesai.
- Tidak ada error di browser console.
- Responsif di desktop, tablet, dan mobile.
- Mematuhi aturan PRD.md, UI.md, dan DATA.md.
- Lulus pengujian manual dan QA.

---

# Estimated Development Order
1. Project Initialization
2. Design System (CSS)
3. JSON Infrastructure
4. Core JavaScript
5. Header & Hero Section
6. About & Experience Section
7. Project Portfolio Section
8. Project Pop-up Modal
9. Multi-Language Integration (i18n)
10. Dark Mode Integration
11. Performance Optimization
12. SEO & Meta Tags
13. Accessibility (a11y)
14. Responsive & Browser Testing
15. QA & Fallback Testing
16. Lighthouse Optimization
17. Final Review & Release v1.0