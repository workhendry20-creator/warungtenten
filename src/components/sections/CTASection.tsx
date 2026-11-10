import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { MessageCircle, CheckCircle2, ShoppingBag, Utensils, Bike } from 'lucide-react';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const CTASection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(siteConfig.phone, siteConfig.whatsappMessage);

  // Format phone number for human-friendly display: "6287882927779" -> "+62 878-8292-7779"
  const formattedPhone = siteConfig.phone.replace(
    /^(\d{2})(\d{3})(\d{4})(\d{4})$/,
    '+$1 $2-$3-$4'
  );

  const serviceOptions = [
    { label: 'Santap di Tempat', icon: Utensils },
    { label: 'Bungkus (Takeaway)', icon: ShoppingBag },
    { label: 'Pesan Antar', icon: Bike },
  ];

  return (
    <section
      id="pesan"
      className="py-16 md:py-24 bg-white relative scroll-mt-16 md:scroll-mt-20 border-t border-neutral-200"
      aria-label="Pemesanan WhatsApp Warung TenTen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-tenten-dark text-tenten-bg px-6 py-12 sm:px-12 sm:py-16 lg:p-20 shadow-xl border border-tenten-dark/20 text-center flex flex-col items-center"
        >
          {/* Subtle Ambient Crimson Glow in Background */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-96 h-96 bg-tenten-primary/20 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-tenten-primary/15 rounded-full blur-3xl pointer-events-none"
          />

          {/* Service Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 relative z-10">
            {serviceOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <span
                  key={opt.label}
                  className="inline-flex items-center gap-1.5 bg-tenten-bg/10 backdrop-blur-sm text-tenten-bg px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-tenten-bg/10"
                >
                  <Icon className="w-3.5 h-3.5 text-tenten-primary" aria-hidden="true" />
                  <span>{opt.label}</span>
                </span>
              );
            })}
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight mb-5 relative z-10">
            Mau Sarapan Apa Pagi Ini? Pesan Sekarang Juga!
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-tenten-bg/80 leading-relaxed max-w-2xl mb-10 relative z-10">
            Nikmati kehangatan sajian sarapan khas nusantara untuk santap di tempat, bungkus bawa
            pulang, maupun pesan antar. Kami siapkan pesanan Anda dengan cepat, bersih, dan hangat.
          </p>

          {/* WhatsApp Primary Big Action Button */}
          <div className="flex flex-col items-center gap-4 w-full sm:w-auto relative z-10">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Pesan sarapan Warung TenTen via WhatsApp di ${formattedPhone}`}
              className="inline-flex items-center justify-center gap-3 bg-tenten-primary hover:bg-tenten-primary/95 text-tenten-bg font-extrabold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-bg focus-visible:ring-offset-2 focus-visible:ring-offset-tenten-dark w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              <span>Pesan via WhatsApp Sekarang</span>
            </motion.a>

            {/* Micro Trust Proof */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-tenten-bg/70 mt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tenten-primary" aria-hidden="true" />
                <span>Langsung Terhubung ke Kasir</span>
              </span>
              <span>•</span>
              <span className="font-mono text-tenten-bg/90 font-semibold">{formattedPhone}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

