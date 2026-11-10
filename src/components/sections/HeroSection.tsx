import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { menuItems } from '../../data/menu';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { Clock, Sparkles, Utensils, MessageCircle, ArrowRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export const HeroSection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(siteConfig.phone, siteConfig.whatsappMessage);
  const featuredItem = menuItems.find((item) => item.isFavorite) || menuItems[0];

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(featuredItem.price);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24" aria-label="Hero Warung TenTen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge Pembuka */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-2 bg-tenten-primary/10 text-tenten-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Buka Setiap Pagi</span>
                <span className="text-tenten-primary/40">•</span>
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Resep Rumahan Autentik</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-tenten-dark leading-[1.15] mb-5"
            >
              Awali Hari dengan{' '}
              <span className="text-tenten-primary">{siteConfig.tagline}</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-tenten-dark/80 leading-relaxed max-w-2xl mb-8"
            >
              Menyajikan bubur lembut kaya rasa, lontong sayur berkuah santan gurih, dan nasi
              kuning pulen hangat. Dimasak segar setiap subuh dengan bumbu rempah pilihan untuk warga
              Pangkalan Bun dan sekitarnya.
            </motion.p>

            {/* Dual Action CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Primary Button: Lihat Menu */}
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Lihat daftar menu sarapan Warung TenTen"
                className="inline-flex items-center justify-center gap-2.5 bg-tenten-primary hover:bg-tenten-primary/95 text-tenten-bg font-bold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary focus-visible:ring-offset-2 text-base"
              >
                <Utensils className="w-4 h-4" aria-hidden="true" />
                <span>Lihat Menu</span>
                <ArrowRight className="w-4 h-4 ml-0.5" aria-hidden="true" />
              </motion.a>

              {/* Secondary Button: Hubungi Kami */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Hubungi Warung TenTen via WhatsApp"
                className="inline-flex items-center justify-center gap-2.5 bg-tenten-surface hover:bg-white text-tenten-dark font-semibold px-6 py-3.5 rounded-xl border border-tenten-dark/20 hover:border-tenten-primary/50 shadow-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary focus-visible:ring-offset-2 text-base"
              >
                <MessageCircle className="w-4 h-4 text-tenten-primary" aria-hidden="true" />
                <span>Hubungi Kami</span>
              </motion.a>
            </motion.div>

            {/* Operational Info Pill */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-tenten-dark/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-tenten-muted"
            >
              <div className="flex items-center gap-1.5">
                <span aria-hidden="true">📍</span>
                <span>{siteConfig.address}</span>
              </div>
              <span className="hidden sm:inline text-tenten-dark/20">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-tenten-primary" aria-hidden="true" />
                <span>{siteConfig.openingHours}</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Hero Card with Framer Motion */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Ambient Backdrop Layer */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-tenten-primary/10 rounded-3xl transform rotate-2 -z-10"
              />

              {/* Featured Image Card */}
              <div className="relative overflow-hidden rounded-2xl border border-tenten-dark/10 shadow-lg bg-tenten-surface">
                <img
                  src={featuredItem.image}
                  alt={`${featuredItem.name} sarapan khas ${siteConfig.name}`}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />

                {/* Floating Highlight Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-tenten-surface/95 backdrop-blur-md p-4 rounded-xl border border-tenten-dark/10 shadow-md flex items-center justify-between">
                  <div className="pr-3">
                    <span className="text-[11px] uppercase font-extrabold tracking-wider text-tenten-primary flex items-center gap-1">
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      <span>Menu Rekomendasi</span>
                    </span>
                    <h2 className="text-base font-bold text-tenten-dark leading-tight mt-0.5">
                      {featuredItem.name}
                    </h2>
                    <p className="text-xs text-tenten-muted line-clamp-1 mt-0.5">
                      {featuredItem.description}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-base font-extrabold text-tenten-primary">
                      {formattedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
