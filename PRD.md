# Product Requirement Document (PRD) - Warung TenTen Landing Page

## 1. Overview & Objectives
- **Brand Name:** Warung TenTen
- **Tagline / Brand Voice:** "Sarapan hangat khas rumahan" — menyajikan kehangatan sarapan nusantara dengan cita rasa rumahan yang autentik, bersih, dan ramah keluarga.
- **Core Problem:** Membutuhkan wadah digital (landing page) untuk memperkuat branding warung, memamerkan katalog menu sarapan secara interaktif, dan mempermudah pelanggan melakukan pemesanan langsung melalui tautan WhatsApp yang siap dibagikan.
- **Target Audience:** Warga lokal Pangkalan Bun, pekerja kantor, dan keluarga yang mencari menu sarapan berkualitas dan praktis.
- **Deployment Platform:** Web App (Vite + React), Mobile-first responsive (375px - 1440px).

## 2. Business Information
- **WhatsApp Direct Number:** `6287882927779`
- **Physical Address:** Warung TenTen, Pangkalan Bun, Kalimantan Tengah
- **Default WhatsApp Message Template:**
  `"Halo Warung TenTen, saya ingin memesan menu sarapan untuk hari ini. Mohon info ketersediaan dan totalnya ya. Terima kasih!"`

## 3. Page Structure & Section Breakdown

### A. Navigation (Floating / Sticky Header)
- Logo / Brand Name: "Warung TenTen"
- Quick Links: #tentang, #menu, #lokasi
- Action Button: "Pesan Sekarang" (Auto-scroll ke Section CTA Order atau membuka WhatsApp langsung).

### B. Hero Section
- Heading: Menegaskan sarapan hangat khas rumahan.
- Subheading: Deskripsi singkat tentang sajian sarapan pagi harian di Pangkalan Bun.
- Badges: "Buka Setiap Pagi" & "Resep Rumahan Autentik".
- Dual CTA:
  1. Primary Button: "Lihat Menu" (Smooth scroll ke Section Menu).
  2. Secondary Button: "Hubungi Kami" (Mengarahkan ke WhatsApp).

### C. About / Brand Story Section
- Tiga pilar utama warung:
  1. *Bahan Segar Setiap Subuh*
  2. *Kuah & Rempah Warisan Rumahan*
  3. *Porsi Pas & Higienis*

### D. Interactive Menu Catalog Section
- **Kategori Filter:** Tab selector ("Semua", "Makanan", "Minuman").
- **Katalog Interaktif:** Menampilkan kartu menu dengan ilustrasi/ikon placeholder lokal, badge harga, deskripsi bahan, dan penanda "Favorit".
- **Catatan Alur (PENTING):** Di dalam kartu menu **TIDAK ADA** tombol order WhatsApp individual. Pengunjung murni menjelajah menu secara interaktif di section ini.

### E. Dedicated WhatsApp Ordering Section (CTA Section)
- Banner interaktif yang mencolok dan persuasif.
- Headline ajakan memesan sarapan untuk santap di tempat, bungkus (takeaway), maupun pesan antar.
- Tombol Utama WhatsApp besar dengan nomor `6287882927779` dan icon WhatsApp/Message, memicu deep-link `https://wa.me/6287882927779?text=...`.

### F. Location & Operating Hours Section
- Alamat lengkap: Pangkalan Bun, Kalimantan Tengah.
- Jam operasional: 06.00 - 11.00 WITA (Buka Setiap Hari).
- Petunjuk visual lokasi / Maps Card placeholder.

### G. Footer
- Copyright notice © Warung TenTen.
- Link media sosial dan navigasi sekunder.

## 4. Initial Menu Data Scope
| ID | Nama Menu | Kategori | Harga | Deskripsi Singkat | Status |
|---|---|---|---|---|---|
| m-1 | Bubur Ayam TenTen | Makanan | Rp 18.000 | Bubur gurih lembut berpadu suwiran ayam gurih, cakwe renyah, dan kuah kaldu kuning khas rumahan. | Favorit |
| m-2 | Nasi Uduk Komplit | Makanan | Rp 20.000 | Nasi uduk wangi daun salam serai, orek tempe manis, bihun kampung, dan sambal terasi matang. | Favorit |
| m-3 | Lontong Sayur Gurih | Makanan | Rp 18.000 | Lontong pulen berkuah santan labu siam gurih hangat, tahu, telur, dan kerupuk garing. | Reguler |
| d-1 | Es Teh Manis Segar | Minuman | Rp 5.000 | Seduhan daun teh melati pilihan dengan manis seimbang penyegar pagi. | Reguler |
| d-2 | Es Jeruk Murni | Minuman | Rp 8.000 | Perasan buah jeruk segar kaya vitamin C disajikan dingin. | Favorit |
| d-3 | Es Kacang Hijau Santan | Minuman | Rp 10.000 | Kacang hijau rebus empuk legit dengan kuah santan gurih dan es serut. | Reguler |