\# 📄 Product Requirements Document (PRD): Personal Portfolio Website

\#\# 1\. Ringkasan Proyek  
Proyek ini adalah pembuatan website portofolio pribadi bergaya \*Single Page Application\* (SPA) dengan pendekatan \*Mobile-First Design\*. Website dirancang dengan antarmuka modern (menggunakan gaya \*glassmorphism\* dan \*Dark Mode\*), memiliki performa tinggi, dan dilengkapi fitur multi-bahasa mandiri berbasis file JSON dan JavaScript. Dokumen ini menjadi panduan \*end-to-end\* mulai dari spesifikasi hingga tahap \*deployment\* ke \*production\*.

\---

\#\# 2\. Spesifikasi Teknis & Arsitektur Inti  
\*   \*\*Pendekatan Utama:\*\* \*Single Page Application\* (SPA), \*Mobile-First Design\*.  
\*   \*\*Manajemen Data Konten:\*\* Menggunakan file JSON statis (\`projects.json\`) sebagai \*database\* utama untuk daftar proyek.  
\*   \*\*Manajemen Multi-bahasa:\*\* Dibangun sepenuhnya dengan file JSON lokal (\`translations.json\`) dan Vanilla JavaScript tanpa bergantung pada API eksternal.  
\*   \*\*Penyimpanan Sesi:\*\* Menggunakan \`localStorage\` untuk menyimpan preferensi bahasa (ID/EN) dan tema (\*Light/Dark mode\*) pengguna.  
\*   \*\*Ikonografi:\*\* Fleksibel menggunakan SVG \*inline\* atau \*library\* ringan (misal: Phosphor Icons, Heroicons).  
\*   \*\*State Management, Error Handling & Fallback:\*\*  
    \*   \*\*Loading State:\*\* Menampilkan \*Skeleton Loader\* atau \*Spinner\* sementara saat JavaScript melakukan \*fetch\* data dari file JSON.  
    \*   \*\*Error/Offline State:\*\* Menyediakan \*fallback text\* (misal: "Gagal memuat data, silakan periksa koneksi Anda dan muat ulang halaman") jika gagal memuat \`projects.json\` atau \`translations.json\`. Website tidak boleh mengalami \*blank screen\* atau \*crash\* jika terjadi kegagalan jaringan (\*Offline Mode graceful degradation\*).

\---

\#\# 3\. Struktur Konten & Layout (Halaman Utama)

\#\#\# A. Landing Page (Hero Section) & Navbar  
\*   \*\*Navbar (Kiri):\*\* Menampilkan Logo yang disandingkan dengan teks nama "\*\*Fatih Akmal\*\*".  
\*   \*\*Navbar (Kanan):\*\* Terdapat tombol \*toggle\* Bahasa (ID/EN) dan Tema (\*Dark/Light\*) dengan desain \*clean glassmorphism\*.  
\*   \*\*Layout Hero:\*\* Pendekatan \*split-layout\* pada layar besar.  
    \*   \*\*Sisi Kiri:\*\* Teks utama (\*Headline\*, \*Sub-headline\*) dan tombol \*Call to Action\* (CTA).  
    \*   \*\*Sisi Kanan:\*\* Menampilkan kolase visual atau \*bento-grid\* gambar estetik.

\#\#\# B. About Me (Profile)  
\*   Berisi penjelasan mendetail mengenai profil, visi, dan keahlian utama (\*core skills\*).

\#\#\# C. Experience & Education  
\*   \*\*Format Layout:\*\* Ditampilkan menggunakan \*Card Carousel\* (\*Slider\* interaktif).  
\*   \*\*Kategori (Tab/Nav):\*\* Tab navigasi meliputi \*Education\*, \*Experience\*, dan \*Organization & Others\*.  
\*   \*\*Isi Konten:\*\* Berbentuk linimasa (\*timeline\*) berisi tanggal, jabatan/posisi, institusi, dan deskripsi tugas.

\#\#\# D. Project / Portofolio  
\*   \*\*Tampilan Galeri:\*\* Data proyek dirender secara dinamis membentuk \*Card Grid\*.  
\*   \*\*Struktur Card Proyek:\*\* \*Thumbnail/preview\* (atas), Judul Proyek, dan tombol berbentuk pil "Lihat Project" (bawah).  
\*   \*\*Interaksi Modal:\*\* Mengklik tombol akan memicu \*Pop-up Modal\* berbasis \*glassmorphism\*.  
\*   \*\*Isi Modal Project:\*\* \*Preview\* gambar besar, Judul, Deskripsi, Tanggal Dibuat, Teknologi Digunakan, Jenis Proyek, serta \*link\* \*View Code\* dan \*Live Site\*.

\#\#\# E. Contact Me  
\*   Menampilkan informasi kontak (Email, LinkedIn, GitHub) dalam bentuk teks dan tautan langsung (tanpa \*form\* isian).

\---

\#\# 4\. Panduan Desain (UI/UX) & Interaksi

\#\#\# Tipografi (Google Fonts)  
\*   \*\*Font Logo / Brand:\*\* \*\*Vujahday Script\*\* (Eksklusif untuk teks nama pada bagian Navbar).  
\*   \*\*Font Utama:\*\* \*\*Chiron Hei HK\*\* (Global untuk seluruh teks seperti \*Heading\*, Paragraf, Navigasi, dan Tombol).

\#\#\# Palet Warna  
| Elemen | Kode Hex | Penggunaan Utama |  
| :--- | :--- | :--- |  
| \*\*Abu-abu Arang\*\* | \`\#353535\` | Teks utama pada \*Light Mode\*. |  
| \*\*Hijau Kebiruan\*\* | \`\#3C6E71\` | Aksen sekunder / Latar belakang \*card\*. |  
| \*\*Putih\*\* | \`\#FFFFFF\` | Latar belakang \*card/modal\*, teks pada \*Dark Mode\*. |  
| \*\*Abu-abu Terang\*\* | \`\#D9D9D9\` | Garis tepi (\*border\*), area penampang sekunder. |  
| \*\*Biru Dongker Terang\*\* | \`\#284B63\` | Aksen primer, tombol CTA aktif, \*link\*. |

\#\#\# Transisi & Animasi (Micro-interactions)  
\*   \*\*Modal Pop-up:\*\* Muncul dengan efek \*fade-in\* (transparansi 0 ke 1\) dan \*scale-up\* (skala 0.95 ke 1\) dengan durasi \`0.3s ease-out\`.  
\*   \*\*Dark Mode Toggle:\*\* Transisi perubahan warna latar belakang (\`background-color\`, \`color\`) menggunakan kelancaran \`0.3s ease-in-out\` (untuk mencegah perubahan visual yang berkedip instan).  
\*   \*\*Hover Project Card:\*\* Efek melayang perlahan (\`translateY(-5px)\`) dan bayangan (\`box-shadow\`) menebal dengan transisi \`0.3s ease\`.

\#\#\# Responsive Breakpoints  
Desain wajib responsif di seluruh perangkat dengan pembagian 4 \*breakpoints\* utama. Diperlukan \*override\* variabel \`$grid-breakpoints\` pada SCSS Bootstrap untuk mengakomodasi batasan kustom ini.

\*   \*\*1. Mobile / Smartphone (\< 480px)\*\*   
    \*   \*\*Target:\*\* Perangkat \*mobile\* modern (termasuk iPhone 14 Pro Max, Samsung Galaxy S series, dsb).  
    \*   \*\*Layout:\*\* Navigasi \*hamburger/collapse\* layar penuh, konten Hero bertumpuk vertikal 100%, ukuran \*font\* disesuaikan menjadi lebih kecil (\*readable\*), \*Carousel\* 1 kolom penuh, Grid Proyek 1 kolom.   
    \*   \*\*Interaksi:\*\* Area sentuh (\*touch target\*) untuk tombol dan \*link\* minimal 44x44px.  
\*   \*\*2. Phablet / Tablet Portrait (480px \- 767px)\*\*  
    \*   \*\*Target:\*\* Layar \*smartphone landscape\*, \*tablet\* kecil, atau perangkat \*phablet\*.  
    \*   \*\*Layout:\*\* Ruang bernapas (\*padding/margin\*) lebih longgar dibandingkan \*mobile\*. Hero Section masih vertikal namun gambar visual/bento-grid ditata lebih proporsional. Grid proyek bisa tetap 1 kolom besar atau mulai menampilkan 2 kolom kecil (tergantung ketersediaan ruang).  
\*   \*\*3. Tablet Landscape / Laptop (768px \- 1024px)\*\*  
    \*   \*\*Target:\*\* iPad/Tablet mode \*landscape\* dan layar laptop kecil.  
    \*   \*\*Layout:\*\* Transisi \*layout\* yang signifikan. Navbar mungkin masih dalam bentuk \*hamburger\* atau mulai melebar rata. Hero mulai menyesuaikan menjadi \*split-layout\* (kiri-kanan) namun lebih padat. Grid Proyek stabil menjadi 2 kolom.  
\*   \*\*4. Desktop / Large Screen (\> 1024px)\*\*  
    \*   \*\*Target:\*\* Layar monitor PC, Laptop standar (13 inch ke atas), iMac.  
    \*   \*\*Layout:\*\* Navbar terbuka penuh menyamping (logo di kiri, menu navigasi di kanan). Hero Section \*split-layout\* sempurna (teks kiri, visual kanan). Grid Proyek tampil rapi dalam 3 kolom (atau 4 kolom jika layar \> 1400px).

\> \*\*Catatan Developer (SCSS Bootstrap Override):\*\*  
\> \`\`\`scss  
\> // Custom Bootstrap Breakpoints  
\> $grid-breakpoints: (  
\>   xs: 0,  
\>   sm: 480px,  // Override default 576px  
\>   md: 768px,  
\>   lg: 1025px, // Disesuaikan untuk desktop (\> 1024px)  
\>   xl: 1200px,  
\>   xxl: 1400px  
\> );  
\> \`\`\`

\---

\#\# 5\. Performa, SEO & Aksesibilitas (a11y)  
\*   \*\*Optimasi Gambar:\*\*  
    \*   Wajib menggunakan format \*\*WebP\*\* untuk kompresi maksimal tanpa kehilangan kualitas.  
    \*   Wajib menerapkan atribut \`loading="lazy"\` pada tag \`\<img\>\` di dalam \*card\* dan modal untuk mempercepat \*First Contentful Paint\* (FCP).  
\*   \*\*Aksesibilitas (a11y):\*\* Penggunaan atribut \`aria-label\` pada tombol yang hanya berupa ikon (seperti tombol tutup 'X' pada modal, \*toggle\* tema/bahasa, navigasi panah \*carousel\*) agar kompatibel dengan \*screen reader\*.  
\*   \*\*SEO & Meta Tags:\*\*  
    \*   Implementasi struktur \*Semantic HTML\* (\`\<header\>\`, \`\<main\>\`, \`\<section\>\`, \`\<article\>\`).  
    \*   Penambahan \*Open Graph (OG) meta tags\* di \`\<head\>\` agar memunculkan \*preview\* gambar (\*thumbnail\*), judul, dan deskripsi proyek dengan rapi saat tautan dibagikan via media sosial atau aplikasi pesan.  
\*   \*\*Target Metrik (Lighthouse Optimization):\*\*  
    Website wajib dioptimasi hingga mencapai skor minimal \*\*95+\*\* pada Google Lighthouse untuk keempat kategori berikut:  
    \*   \*Performance\* (Kecepatan muat, FCP, LCP).  
    \*   \*Accessibility\* (Kontras warna, navigasi keyboard, tag ARIA).  
    \*   \*Best Practices\* (Keamanan dasar, console bersih dari error).  
    \*   \*SEO\* (Struktur meta, validitas HTML).

\---

\#\# 6\. Infrastruktur & Deployment  
\*   \*\*Platform Hosting:\*\* Deployment berkelanjutan (CI/CD) menggunakan layanan gratis seperti \*\*Netlify\*\* atau \*\*Vercel\*\*, dihubungkan langsung ke repositori GitHub.  
\*   \*\*Web Analytics:\*\* Integrasi \*\*Google Analytics 4 (GA4)\*\* atau \*\*Vercel Analytics\*\* gratis untuk melacak jumlah pengunjung, sumber trafik, dan interaksi yang dilakukan rekruter/klien saat melihat web.

\---

\#\# 7\. Struktur Direktori File

\`\`\`text  
/  
├── index.html  
├── css/  
│   └── style.css          (Variabel palet, typography, grid, glassmorphism, animasi & breakpoints)  
├── js/  
│   ├── main.js            (Logika carousel, modal, dark mode, render project, loading state)  
│   └── language.js        (Logika parsing translations.json, localStorage, dan fallback error)  
├── data/  
│   ├── projects.json      (Database list project & link URL)  
│   ├── experience.json    (Database timeline pengalaman, edukasi, & organisasi)  
│   └── translations.json  (Database kamus bahasa Indonesia & Inggris murni JSON)  
└── assets/  
    ├── icons/             (SVG dari library pihak ketiga atau custom inline)  
    └── images/  
        ├── brand/         (Favicon, OG Image preview untuk SEO)  
        └── project/       (Gambar preview/thumbnail berformat WebP)

## **8\. Tech Stack & Development Standard**

### **Bahasa Pemrograman & Framework**

Website dikembangkan menggunakan teknologi *Front-End* murni dengan spesifikasi berikut:

* **HTML5** (*Semantic HTML*)  
* **CSS3 / SCSS** (SCSS dikompilasi menjadi CSS sebelum *production*)  
* **Bootstrap 5.x** sebagai *framework layout* dan *utility class*  
* **Vanilla JavaScript (ES6+)** sebagai bahasa utama untuk seluruh logika aplikasi  
* **Peringatan Eksekusi:** **Dilarang** menggunakan *framework* JavaScript seperti React, Vue, Angular, Svelte, maupun Next.js.

### **Library JavaScript (Opsional & Diizinkan)**

Diperbolehkan menggunakan *library* berbasis Vanilla JS apabila memberikan peningkatan performa, UX, atau *maintainability*, selama tidak mengubah arsitektur menjadi SPA *framework*, tidak membebani performa, dan dimuat secara *lazy load* bila memungkinkan. Contoh yang diizinkan:

* **Animasi/UI:** GSAP, Anime.js, AOS, Vanilla Tilt.js, Lottie Web, CountUp.js.  
* **Interaksi/Popup:** SweetAlert2, GLightbox / PhotoSwipe.  
* **Slider/Scrolling:** Swiper.js / Splide.js, Lenis / Locomotive Scroll.  
* **Lainnya:** Typed.js, Three.js (jika perlu 3D ringan), Isotope.js / MixItUp, Prism.js, Chart.js.

### **Bootstrap Guidelines**

Bootstrap digunakan murni sebagai fondasi *layout* dan *responsive system*. Komponen Bootstrap dapat dikustomisasi (menggunakan CSS/SCSS) agar sesuai dengan identitas visual. Fitur yang dimanfaatkan:

* Grid System, Container, Flexbox, Spacing, & Utilities.  
* Navbar Collapse & Responsive Display.  
* Modal (dikustomisasi menjadi *glassmorphism*), Offcanvas, Accordion, & Buttons.

### **JavaScript Coding Standard**

Seluruh logika aplikasi menggunakan Vanilla JavaScript dengan prinsip:

* Modular, *Reusable*, dan *Clean Code*.  
* Tidak menggunakan *global variable* secara berlebihan.  
* Memanfaatkan **ES Module** (`import/export`) bila diperlukan.  
* Seluruh interaksi menggunakan `addEventListener` (Hindari *inline* JS pada HTML).  
* Menggunakan `async/await` untuk proses *asynchronous*.  
* Wajib memiliki *error handling* (`try...catch`) dan sistem *fallback* apabila data JSON gagal dimuat.

### **Browser Compatibility**

Website minimal mendukung 2 versi terbaru dari *browser* modern:

* Google Chrome  
* Microsoft Edge  
* Mozilla Firefox  
* Apple Safari

### **Development Principles**

* **Mobile First & Responsive Design**  
* **Clean Code:** Menerapkan DRY (*Don't Repeat Yourself*) dan KISS (*Keep It Simple*).  
* **Performance, Accessibility, & SEO First**  
* Struktur kode yang mudah dikelola (*Maintainable Code Structure*).

### **Build Requirement**

Website harus berjalan sepenuhnya sebagai **Static Website**.

* **TIDAK** memerlukan: *Backend*, Node.js Server, Database Server, atau API Server.  
* Seluruh data bersumber dari JSON lokal sehingga dapat langsung di-deploy ke Netlify, Vercel, atau GitHub Pages tanpa konfigurasi *backend* tambahan.

### **Asset Management**

Seluruh aset disusun terstruktur (SVG Icon, WebP Image, Favicon, OG Image, JSON Data, Fonts). Apabila menggunakan *library* eksternal:

* Gunakan **CDN** selama proses *development*.  
* Gunakan file lokal/minified pada saat *production* untuk meningkatkan stabilitas dan kecepatan *loading*.  
* Buatkan juga agar dapat menggunakan library internal sebagai antisipasi jika server CDN down.  
* Gunakan *versioning* atau *cache busting* sebagai caching issue Pengguna yang mungkin melihat tampilan lama jika saya memperbarui CSS/JS tetapi CDN masih menyimpan versi lama 

### **Code Quality**

Setiap file JavaScript dan CSS wajib:

* Memiliki komentar penjelas pada bagian logika yang kompleks.  
* Menggunakan penamaan variabel (Nomenclature) yang konsisten.  
* Disusun dalam struktur folder yang rapi sehingga mudah diskalakan (*scalable*) di masa depan tanpa perlu *refactor* besar.

## **9\. Definition of Done (DoD) & Penerimaan Kualitas**

Sebuah fitur atau halaman dalam proyek ini hanya dianggap selesai dan siap rilis apabila memenuhi seluruh kriteria berikut:

1. **Zero Errors:** Tidak ada pesan *error* atau *warning* pada *browser console*.  
2. **Responsiveness:** Tampilan tidak hancur (*broken layout*) dan tidak ada *horizontal scrolling* di seluruh 4 titik *breakpoints* (Mobile, Phablet, Tablet, Desktop).  
3. **Cross-Browser Validated:** Berjalan mulus di versi terbaru Chrome, Edge, Firefox, dan Safari.  
4. **Data-Driven:** 100% data dinamis (proyek, pengalaman, bahasa) bersumber dari file JSON, tidak ada teks *hardcode* di dalam HTML/JS untuk bagian tersebut.  
5. **Lighthouse Passed:** Memenuhi skor minimal **95+** untuk Performance, Accessibility, Best Practices, dan SEO.  
6. **Accessibility Passed:** Lulus pengujian navigasi menggunakan *keyboard* (Tab & Enter) pada form, modal, dan tombol.

