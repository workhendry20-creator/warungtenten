# Technical Architecture - Warung TenTen Frontend

## 1. Technology Stack
- **Framework:** React 18+ via Vite (TypeScript)
- **CSS Engine:** Tailwind CSS
- **Animation Engine:** Framer Motion
- **Icon Set:** Lucide React
- **Package Manager:** npm

## 2. Directory Structure
```text
warung-tenten/
├── docs/
│   ├── PRD.md
│   ├── DESIGN_SYSTEM.md
│   └── ARCHITECTURE.md
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── icons/            # Asset SVG lokal
│   │   └── illustrations/    # Asset ilustrasi terpisah
│   ├── components/
│   │   ├── common/           # Button, Badge, Container, SectionTitle
│   │   ├── layout/           # Navbar, Footer
│   │   └── sections/         # HeroSection, AboutSection, MenuSection, CTASection, LocationSection
│   ├── data/
│   │   ├── menu.ts           # Daftar data menu dummy (tipe data ketat)
│   │   └── siteConfig.ts     # Metadata, nomor WA, alamat, jam operasional
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces (MenuItem, Category, dll.)
│   ├── utils/
│   │   └── whatsapp.ts       # Utility helper untuk generate URL wa.me yang valid
│   ├── App.tsx               # Single-page layout assembler
│   ├── main.tsx              # Application entry point
│   └── index.css             # Tailwind base & global styles
├── tailwind.config.js
├── package.json
└── tsconfig.json