# Design System Specification - Warung TenTen

## 1. Color Palette (3-Color Strict Rule)
Desain wajib mengikuti proporsi 60-30-10 untuk menjaga kebersihan visual dan hirarki keterbacaan:

- **Primary / Dominant Light (`#FFF8F0`):**
  - Peran: Background utama, card background, modal kanvas (~60%).
  - Karakter: Floral Warm White, memberikan kesan hangat, bersih, dan membangkitkan selera makan.

- **Secondary / Contrast Dark (`#1E1E24`):**
  - Peran: Tipografi utama, teks judul, border kontras, footer background (~30%).
  - Karakter: Raisin Black, memberikan ketajaman baca maksimal dengan rasio kontras tinggi di atas kanvas light (WCAG AAA compliant).

- **Accent / Interactive Crimson (`#92140C`):**
  - Peran: Tombol CTA pemicu aksi, badge "Favorit", icon highlight, harga menu (~10%).
  - Karakter: Deep Spiced Red, warna khas kuliner nusantara yang tegas dan menarik perhatian mata.

### Tailwind Palette Mapping:
```javascript
colors: {
  tenten: {
    bg: '#FFF8F0',       // Warm White Canvas
    dark: '#1E1E24',     // Dark Charcoal for text & solid bases
    primary: '#92140C',  // Deep Crimson for high-priority CTA
    surface: '#FFFFFF',  // Clean secondary surface
    muted: '#7A7A85',    // Derived readable secondary text
  }
}

2. Typography
Heading Font: Inter / Plus Jakarta Sans (Bold / Semi-bold, tracking-tight).
Body Font: Inter / System UI (Clean, neutral, leading-relaxed).
Scale:
Hero Heading: text-4xl md:text-6xl font-extrabold tracking-tight
Section Title: text-2xl md:text-3xl font-bold
Card Title: text-lg font-bold
Body Text: text-sm md:text-base leading-relaxed
Caption / Price: text-sm font-semibold
3. Component Architecture & Geometry
Border Radius:
Card & Container: rounded-2xl
Buttons & Chips: rounded-xl
Badges & Pills: rounded-full
Elevation / Shadow:
Subtil shadow: shadow-sm dan hover:shadow-md dengan transisi halus. Hindari drop-shadow hitam tebal yang kotor.
Borders:
Border tipis pembatas elemen: border border-[#1E1E24]/10.
4. Motion Guidelines (Framer Motion)
Container Stagger:
Entrance stagger: staggerChildren: 0.1
Fade Up Motion:
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, ease: "easeOut" }}
Interactive Feedback:
Hover button: whileHover={{ scale: 1.02 }}
Tap button: whileTap={{ scale: 0.98 }}
Layout Transition:
Menggunakan prop layout pada kartu menu untuk transisi filter kategori yang mulus tanpa kedip.
5. Iconography & Visual Assets Rule
Icons: Menggunakan pustaka resmi lucide-react (seperti Utensils, Coffee, MessageCircle, MapPin, Clock, Sparkles).
Dilarang keras: Menggunakan emoji mentah sebagai icon UI formal.
Asset Isolation: Semua file aset visual lokal (SVG, ikon kustom, atau ilustrasi) wajib diletakkan secara terisolasi di folder src/assets/images/ atau src/assets/illustrations/ dan diimpor secara eksplisit ke dalam komponen.