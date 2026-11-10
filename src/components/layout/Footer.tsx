import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { UtensilsCrossed, MessageCircle, MapPin, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl(siteConfig.phone, siteConfig.whatsappMessage);

  const footerLinks = [
    { label: 'Beranda', href: '#' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Menu Sarapan', href: '#menu' },
    { label: 'Lokasi & Jam', href: '#lokasi' },
    { label: 'Pesan Sekarang', href: '#pesan' },
  ];

  return (
    <footer className="bg-tenten-dark text-tenten-bg border-t border-tenten-dark/20 relative z-10" aria-label="Footer Warung TenTen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-tenten-bg/10">
          {/* Brand Info Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#"
              className="flex items-center gap-2.5 text-tenten-bg group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary rounded-xl mb-4"
              aria-label={`${siteConfig.name} - Kembali ke atas`}
            >
              <div className="w-10 h-10 rounded-xl bg-tenten-primary text-tenten-bg flex items-center justify-center shadow-sm">
                <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-tenten-bg/70 font-medium tracking-wide mt-1">
                  {siteConfig.tagline}
                </span>
              </div>
            </a>
            <p className="text-sm text-tenten-bg/75 leading-relaxed max-w-sm">
              Menghadirkan kehangatan sarapan nusantara dengan cita rasa rumahan autentik, bersih,
              dan bersahabat bagi seluruh warga Pangkalan Bun.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-tenten-bg/50 mb-4">
              Navigasi Halaman
            </h4>
            <nav className="flex flex-col space-y-2.5" aria-label="Tautan Sekunder">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-tenten-bg/80 hover:text-tenten-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary rounded-md inline-block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Hours Summary */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-tenten-bg/50 mb-4">
                Informasi & Kontak
              </h4>
              <ul className="space-y-3 text-sm text-tenten-bg/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-tenten-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-tenten-primary flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.openingHours}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi WhatsApp Warung TenTen"
                className="inline-flex items-center gap-2 bg-tenten-primary hover:bg-tenten-primary/90 text-tenten-bg text-sm font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-bg"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Closing Warm Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-tenten-bg/60">
          <p>
            © {currentYear} {siteConfig.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Dibuat dengan rasa cinta sarapan rumahan</span>
            <Heart className="w-3.5 h-3.5 text-tenten-primary fill-tenten-primary" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
