import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { menuItems } from '../../data/menu';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import {
  Clock,
  Sparkles,
  Utensils,
  MessageCircle,
  ArrowRight,
  MapPin,
  UtensilsCrossed,
} from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const foodItems = menuItems.filter((item) => item.category === 'Makanan');

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const HeroSection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(siteConfig.phone, siteConfig.whatsappMessage);
  const [selectedDishId, setSelectedDishId] = useState<string>(
    foodItems.find((item) => item.isFavorite)?.id || foodItems[0]?.id || ''
  );

  const activeDish = foodItems.find((item) => item.id === selectedDishId) || foodItems[0];

  return (
    <section
      className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-16 md:pb-24"
      aria-label="Hero Warung TenTen"
    >
      {/* Subtle Dot Grid Background Pattern Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none -z-10 opacity-[0.035] [background-image:radial-gradient(#1E1E24_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
      />

      {/* Faint Ambient Warm Crimson Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 bg-[#92140C]/[0.035] rounded-full blur-3xl pointer-events-none select-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-32 w-80 h-80 bg-[#92140C]/[0.025] rounded-full blur-3xl pointer-events-none select-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badge Pembuka */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 text-[#1E1E24] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <Clock className="w-3.5 h-3.5 text-tenten-primary" aria-hidden="true" />
                <span>Buka Setiap Pagi</span>
                <span className="text-neutral-300">•</span>
                <Sparkles className="w-3.5 h-3.5 text-tenten-primary" aria-hidden="true" />
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
              className="text-base sm:text-lg text-tenten-dark/80 leading-relaxed max-w-xl mb-8"
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
                className="inline-flex items-center justify-center gap-2.5 bg-tenten-primary hover:bg-tenten-primary/95 text-white font-bold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary focus-visible:ring-offset-2 text-base"
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
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-tenten-dark font-semibold px-6 py-3.5 rounded-xl border border-neutral-300 hover:border-tenten-primary/60 shadow-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary focus-visible:ring-offset-2 text-base"
              >
                <MessageCircle className="w-4 h-4 text-tenten-primary" aria-hidden="true" />
                <span>Hubungi Kami</span>
              </motion.a>
            </motion.div>

            {/* Operational Info Pill */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-tenten-muted"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-tenten-primary" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </div>
              <span className="hidden sm:inline text-neutral-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-tenten-primary" aria-hidden="true" />
                <span>{siteConfig.openingHours}</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Bento Showcase Grid Column */}
          <motion.div variants={itemVariants} className="lg:col-span-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bento Card 1: Interactive Dish Spotlight */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="sm:col-span-2 relative bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                {/* Micro Dish Switcher Tab Bar */}
                <div className="p-2 sm:p-2.5 bg-neutral-50/90 border-b border-neutral-200 flex items-center justify-between gap-1.5 overflow-x-auto">
                  <div
                    className="flex items-center gap-1"
                    role="tablist"
                    aria-label="Pilihan Hidangan Sarapan Populer"
                  >
                    {foodItems.map((dish) => {
                      const isSelected = dish.id === selectedDishId;
                      const shortName = dish.name
                        .replace(' TenTen', '')
                        .replace(' Komplit', '')
                        .replace(' Gurih', '');

                      return (
                        <button
                          key={dish.id}
                          role="tab"
                          aria-selected={isSelected}
                          aria-controls={`hero-dish-panel-${dish.id}`}
                          id={`hero-tab-${dish.id}`}
                          onClick={() => setSelectedDishId(dish.id)}
                          className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary ${
                            isSelected ? 'text-white' : 'text-tenten-dark/70 hover:text-tenten-dark'
                          }`}
                        >
                          {isSelected && (
                            <motion.div
                              layoutId="heroDishTabIndicator"
                              transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                              className="absolute inset-0 bg-tenten-primary rounded-lg -z-0"
                            />
                          )}
                          <span className="relative z-10">{shortName}</span>
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-[11px] font-semibold text-tenten-muted hidden sm:inline-flex items-center gap-1 pr-1">
                    <Sparkles className="w-3 h-3 text-tenten-primary" aria-hidden="true" />
                    <span>Favorit</span>
                  </span>
                </div>

                {/* Animated Dish Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDish.id}
                    id={`hero-dish-panel-${activeDish.id}`}
                    role="tabpanel"
                    aria-labelledby={`hero-tab-${activeDish.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="relative group"
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-100">
                      <img
                        src={activeDish.image}
                        alt={`${activeDish.name} sarapan khas ${siteConfig.name}`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      {activeDish.isFavorite && (
                        <div className="absolute top-3 left-3 bg-tenten-primary text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" aria-hidden="true" />
                          <span>Favorit Warga</span>
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-tenten-dark/85 backdrop-blur-sm text-white text-xs font-extrabold px-3 py-1 rounded-lg">
                        {formatPrice(activeDish.price)}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-tenten-dark tracking-tight">
                          {activeDish.name}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-tenten-dark/75 line-clamp-2 leading-relaxed">
                          {activeDish.description}
                        </p>
                      </div>
                      <a
                        href="#menu"
                        aria-label={`Lihat detail ${activeDish.name} di daftar menu`}
                        className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold text-tenten-primary hover:text-tenten-primary/80 transition-colors pt-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary rounded-md"
                      >
                        <span>Menu</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Bento Card 2: Operational Live Pulse */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 text-tenten-primary flex items-center justify-center border border-neutral-200/60">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Buka Pagi</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-tenten-dark tracking-tight">
                    {siteConfig.openingHours.replace('Buka Setiap Hari: ', '')}
                  </h4>
                  <p className="text-xs text-tenten-dark/70 mt-0.5 leading-relaxed">
                    Dimasak segar setiap subuh untuk energi sarapan Anda.
                  </p>
                </div>
              </motion.div>

              {/* Bento Card 3: Authentic Spices & Fresh Guarantee */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 text-tenten-primary flex items-center justify-center border border-neutral-200/60">
                    <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tenten-primary bg-neutral-50 border border-neutral-200/80 px-2.5 py-1 rounded-full">
                    100% Alami
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-tenten-dark tracking-tight">
                    Resep Rempah Warisan
                  </h4>
                  <p className="text-xs text-tenten-dark/70 mt-0.5 leading-relaxed">
                    Kuah kaldu kuning dan santan gurih tanpa pengawet.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;