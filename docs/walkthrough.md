# SPA Refactoring — Walkthrough

## Ringkasan Perubahan
Website portfolio telah berhasil diubah dari *single long page* menjadi **Single Page Application (SPA)** menggunakan routing berbasis hash (`#/home`, `#/about`).

---

## File yang Dibuat

### [router.js](file:///c:/Users/Fatih%20Akmal/Music/new_porto/js/router.js)
Router SPA utama yang menangani:
- Mencocokkan URL hash dengan modul halaman
- Transisi halaman dengan efek fade
- Re-apply terjemahan (`applyLanguage`) setiap kali halaman baru dimuat
- Memanggil fungsi `init()` halaman untuk memuat data dinamis (skills, experience)
- Mendengarkan event `languageChanged` untuk re-init halaman aktif

### [home.js](file:///c:/Users/Fatih%20Akmal/Music/new_porto/js/pages/home.js)
Template halaman **Home / Hero Section**. Berisi:
- Salam (greeting), nama, dan peran
- Tombol CTA (Lihat Karya Saya, Hubungi Saya)
- Bento Grid dengan foto dan statistik

### [about.js](file:///c:/Users/Fatih%20Akmal/Music/new_porto/js/pages/about.js)
Template halaman **About** dengan logika mandiri:
- Deskripsi dan foto profil
- Skills (diambil dari `skills.json`)
- Tabs Experience/Education/Organization (diambil dari `experience.json`)
- Semua logika yang sebelumnya ada di `main.js` kini dipindah ke sini

---

## File yang Dimodifikasi

### [index.html](file:///c:/Users/Fatih%20Akmal/Music/new_porto/index.html)
- **Navbar**: Ditambahkan link navigasi **Beranda** dan **Tentang** dengan `data-route` attribute
- **Main content**: Dikosongkan — sekarang diisi secara dinamis oleh router
- Berkurang dari ~139 baris menjadi **77 baris** (lebih bersih dan ringkas)

### [main.js](file:///c:/Users/Fatih%20Akmal/Music/new_porto/js/main.js)
- Dihapus: semua logika Experience, Skills, dan Tab Switching
- Ditambahkan: `import { initRouter }` dan pemanggilan `initRouter()` di `initApp()`
- Tetap menyimpan: Theme, Language toggle, `fetchJSON()` utility

### [translations.json](file:///c:/Users/Fatih%20Akmal/Music/new_porto/data/translations.json)
- Ditambahkan kunci terjemahan baru: `nav_home`, `btn_projects`, `btn_contact`, `stat_experience`, `stat_projects`, `about_title`, `about_desc`, `about_skills`, `tab_experience`, `tab_education`, `tab_organization`

### [style.css](file:///c:/Users/Fatih%20Akmal/Music/new_porto/css/style.css)
- Ditambahkan styling `.nav-link[data-route]` dengan efek hover, active state, dan garis bawah

---

## Cara Kerjanya
1. Saat halaman dibuka, `main.js` → `initRouter()` → cek URL hash
2. Jika `#/home` → import `pages/home.js` → inject HTML ke `<main>`
3. Jika `#/about` → import `pages/about.js` → inject HTML → panggil `init()` → muat skills & experience
4. Klik nav link → ubah hash → router mendeteksi → muat halaman baru dengan efek fade

## Verifikasi
Silakan buka website di browser dan coba:
1. Klik link **"Tentang"** di navbar — halaman About harus muncul
2. Klik link **"Beranda"** — kembali ke Hero
3. Ganti bahasa — teks harus berubah di halaman yang sedang aktif
4. Ganti tema — dark/light mode harus bekerja di semua halaman
