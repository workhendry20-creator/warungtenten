# Agent Directives & Operational Rules - Warung TenTen
Dokumen ini adalah instruksi kerja wajib bagi AI Agent dalam mengelola, menulis kode, dan mengeksekusi tugas pada repositori ini.

---

## 0. Mandatory Skills Reference
- **Active Skills Location:** `.agents/skills/`
- **Aturan Eksekusi:** Sebelum merancang atau menulis komponen UI, layout, typography, warna, dan interaksi, Agent **WAJIB** membaca dan mengaplikasikan aturan, checklist, serta token desain yang ada di dalam direktori `.agents/skills/`.
- Jangan mengabaikan guideline aksesibilitas, responsivitas, dan micro-interaction yang telah didefinisikan di dalam skill tersebut.

## 1. Core Persona & Output Style
- **Ringkas & Langsung:** Berikan penjelasan to-the-point tanpa intro panjang, basa-basi, atau penutup berlebihan.
- **Efisiensi Kode (Anti AI-Slop):** 
  - Hindari boilerplate berlebih, komentar kode yang tidak perlu, dan fungsi utilitas yang tidak pernah dipanggil.
  - Tulis kode TypeScript + React yang bersih, modular, dan berperforma tinggi.
- **UI Intelligence (UI-UX Pro Max Integration):**
  - Wajib mengacu pada rules, design tokens, dan panduan yang di-generate dari `ui-ux-pro-max` (`uipro init --ai antigravity`).
  - Patuhi strict 3-color palette: `#92140C` (Aksen CTA), `#FFF8F0` (Kanvas Light), dan `#1E1E24` (Teks/Kontras).
  - Terapkan micro-interaction yang solid dengan Framer Motion tanpa efek visual berlebihan.

---

## 2. Engineering & Coding Standards
1. **Separation of Concerns:**
   - Dilarang keras menulis data mentah (hardcoded data/copywriting) langsung di dalam JSX komponen.
   - Semua konten menu, teks hero, nomor WhatsApp, alamat, dan konfigurasi wajib diimpor dari modul di `src/data/` (`menu.ts`, `siteConfig.ts`).
2. **Accessible Interaction (A11y):**
   - Semua elemen interaktif (tombol, link, tab filter) wajib menyertakan kelas `cursor-pointer`, atribut `aria-label`, dan style `focus-visible:outline-none focus-visible:ring-2`.
   - Hindari icon emoji mentah di UI; selalu gunakan `lucide-react`.
3. **No Breakpoints Overflow:**
   - Pertahankan padding horizontal mobile minimal `px-4` atau `px-6`.
   - Pastikan lebar container tidak pernah melebihi 100vw atau menyebabkan horizontal scrolling pada viewport 375px.
4. **Isolated Asset Management:**
   - Aset visual/ilustrasi lokal wajib berada di folder terpisah (`src/assets/`) dan diimpor secara eksplisit, bukan ditanam inline sebagai SVG raksasa di dalam file komponen.

---

## 3. Git Workflow & Remote Repository
- **Remote Target:** `https://github.com/workhendry20-creator/warungtenten`
- **Active Working Branch:** `development`
- **Commit Rules:**
  - Lakukan commit dan push ke branch `development`.
  - Gunakan format conventional commits yang deskriptif dan padat (contoh: `feat: implement interactive menu catalog`, `chore: setup tailwind colors and types`).