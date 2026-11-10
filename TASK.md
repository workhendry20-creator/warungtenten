# Implementation Tasks - Warung TenTen Landing Page

Dokumen ini adalah daftar tugas bertahap (sprint backlog) untuk AI Agent.
Aturan: 
- Kerjakan satu sub-task dalam satu waktu.
- Jangan lanjut ke task berikutnya sebelum task aktif selesai dan terverifikasi tanpa error.
- Centang `[x]` setelah tugas selesai diuji.

---

## Phase 1: Foundation & Data Layer
- [x] **Task 1.1: Core Types & Constants**
  - Implementasi `src/types/index.ts` (MenuItem, Category, SiteConfig).
  - Pastikan types mencakup `image` path string untuk tiap menu.
- [x] **Task 1.2: Business Data & Menu Mock**
  - Buat `src/data/siteConfig.ts` (Data: Warung TenTen, Pangkalan Bun, WA 6287882927779, jam operasional).
  - Buat `src/data/menu.ts` (Daftar 6 menu sarapan, hubungkan dengan path file di `/assets/`).
- [x] **Task 1.3: Utilities & Helpers**
  - Buat `src/utils/whatsapp.ts` (Fungsi encode URL pesan WA otomatis yang aman).
- [x] **Task 1.4: Tailwind & Global Style Configuration**
  - Konfigurasi `tailwind.config.js` dengan strict colors:
    - `bg`: `#FFF8F0`
    - `dark`: `#1E1E24`
    - `primary`: `#92140C`
    - `surface`: `#FFFFFF`
  - Setup font, resets, dan background default di `src/index.css`.

---

## Phase 2: Navigation & Hero Section (Fold 1)
- [x] **Task 2.1: Navigation Bar (`src/components/layout/Navbar.tsx`)**
  - Sticky / floating dengan background blur halus (`backdrop-blur-md`).
  - Brand identity: Logo / teks "Warung TenTen".
  - Jump navigation: Anchor links (#tentang, #menu, #lokasi).
  - Action button: CTA "Pesan Sekarang" (memicu scroll ke WhatsApp section).
  - Responsif: Tambahkan menu drawer / sheet minimalis untuk layar HP (<768px).
- [x] **Task 2.2: Hero Section (`src/components/sections/HeroSection.tsx`)**
  - Badge pill: "Buka Setiap Pagi • Resep Rumahan Autentik".
  - Headline kuat: "Sajian Sarapan Hangat Khas Rumahan".
  - Subtitle deskriptif seputar kuliner sarapan pagi Pangkalan Bun.
  - Dual action button: "Lihat Menu" (scroll ke #menu) dan "Hubungi Kami" (WA).
  - Integrasi visual: Tampilkan kartu hero visual dengan animasi fade-up Framer Motion.

---

## Phase 3: Brand Story & Interactive Menu Catalog
- [x] **Task 3.1: About Section (`src/components/sections/AboutSection.tsx`)**
  - 3 pilar warung (Bahan Segar Setiap Subuh, Resep Warisan, Porsi Pas & Higienis).
  - Tampilan card minimalis dengan icon Lucide React dan subtle border (`border-[#1E1E24]/10`).
- [x] **Task 3.2: Menu Catalog Section (`src/components/sections/MenuSection.tsx`)**
  - Tab kategori interaktif ("Semua", "Makanan", "Minuman") dengan layout animation Framer Motion.
  - Card menu responsif (Grid 1 kolom di mobile, 2–3 kolom di tablet/desktop).
  - Card elements: Foto dari `/assets/`, nama menu, deskripsi bahan, harga tebal warna `#92140C`, badge "Favorit".
  - *Constraint:* Tanpa tombol order individual per card.

---

## Phase 4: Ordering CTA, Location & Footer
- [x] **Task 4.1: Dedicated WhatsApp CTA Section (`src/components/sections/CTASection.tsx`)**
  - Banner mencolok berlatar kontras dengan headline ajakan memesan (Dine-in / Takeaway / Delivery).
  - Tombol WhatsApp utama berukuran besar dengan icon `MessageCircle`, memicu link WA `6287882927779`.
- [x] **Task 4.2: Location & Hours Section (`src/components/sections/LocationSection.tsx`)**
  - Card informasi: Pangkalan Bun, Kalimantan Tengah.
  - Jam buka: 06.00 - 11.00 WITA (Buka Setiap Hari).
- [x] **Task 4.3: Footer (`src/components/layout/Footer.tsx`)**
  - Copyright © Warung TenTen, link media sosial, dan catatan penutup ramah.

---

## Phase 5: Assembly, QA & Polishing
- [x] **Task 5.1: Main Page Integration (`src/App.tsx`)**
  - Rakit seluruh komponen secara berurutan.
- [x] **Task 5.2: Responsiveness & A11y Audit**
  - Cek viewport 375px (pastikan zero horizontal overflow).
  - Verifikasi semua tombol memiliki status hover, tap, dan `focus-visible`.
- [x] **Task 5.3: Git Commit & Push**
  - Commit seluruh progres ke branch `development` di GitHub.