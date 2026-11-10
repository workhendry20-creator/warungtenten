import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { UtensilsCrossed, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang', ariaLabel: 'Navigasi ke bagian Tentang Warung TenTen' },
    { label: 'Menu Sarapan', href: '#menu', ariaLabel: 'Navigasi ke daftar Menu Sarapan' },
    { label: 'Lokasi & Jam', href: '#lokasi', ariaLabel: 'Navigasi ke Lokasi dan Jam Operasional' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#1E1E24]/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-tenten-dark group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary rounded-xl"
            aria-label={`${siteConfig.name} - Beranda`}
          >
            <div className="w-9 h-9 rounded-xl bg-tenten-primary text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg md:text-xl tracking-tight leading-none text-tenten-dark">
                {siteConfig.name}
              </span>
              <span className="text-[10px] md:text-xs text-tenten-muted font-medium tracking-wide">
                {siteConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                className="text-sm font-semibold text-tenten-dark/80 hover:text-tenten-primary transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="#pesan"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Pesan menu sarapan sekarang"
              className="inline-flex items-center gap-2 bg-tenten-primary hover:bg-tenten-primary/95 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary focus-visible:ring-offset-2"
            >
              <span>Pesan Sekarang</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-tenten-dark hover:bg-neutral-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary"
              aria-label={isMobileMenuOpen ? 'Tutup navigasi' : 'Buka menu navigasi'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer / Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden border-b border-[#1E1E24]/10 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Navigasi Menu Seluler">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  onClick={handleNavClick}
                  className="px-3.5 py-2.5 rounded-xl text-base font-semibold text-tenten-dark hover:bg-neutral-100 hover:text-tenten-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-neutral-200">
              <motion.a
                href="#pesan"
                whileTap={{ scale: 0.98 }}
                onClick={handleNavClick}
                aria-label="Pesan menu sarapan sekarang"
                className="flex items-center justify-center gap-2 w-full bg-tenten-primary text-white text-center font-bold py-3 rounded-xl shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary focus-visible:ring-offset-2"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
