import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../../data/menu';
import type { MenuCategory } from '../../types';
import { Sparkles, Utensils, Coffee } from 'lucide-react';

const categories: { label: MenuCategory; icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }> }[] = [
  { label: 'Semua', icon: Sparkles },
  { label: 'Makanan', icon: Utensils },
  { label: 'Minuman', icon: Coffee },
];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Semua');

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === 'Semua') return true;
    return item.category === activeCategory;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section
      id="menu"
      className="py-16 md:py-24 bg-tenten-bg relative scroll-mt-16 md:scroll-mt-20 border-t border-tenten-dark/10"
      aria-label="Katalog Menu Sarapan"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tenten-primary bg-tenten-primary/10 px-3 py-1 rounded-full mb-3">
            Pilihan Menu Pagi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tenten-dark tracking-tight">
            Menu Sarapan Favorit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-tenten-dark/75 leading-relaxed">
            Jelajahi sajian sarapan khas rumahan pilihan. Dari bubur gurih, lontong sayur hangat,
            hingga penyegar dahaga pagi hari.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Kategori Menu Sarapan"
            className="inline-flex p-1.5 rounded-2xl bg-tenten-dark/5 border border-tenten-dark/10"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              const IconComp = cat.icon;

              return (
                <button
                  key={cat.label}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`menu-panel-${cat.label}`}
                  id={`tab-${cat.label}`}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary ${
                    isActive ? 'text-tenten-bg' : 'text-tenten-dark/75 hover:text-tenten-dark'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-tenten-primary rounded-xl shadow-sm -z-0"
                    />
                  )}
                  <IconComp className="w-4 h-4 relative z-10" aria-hidden="true" />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Menu Grid */}
        <motion.div
          layout
          id={`menu-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-tenten-surface rounded-2xl overflow-hidden border border-tenten-dark/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-tenten-dark/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.isFavorite && (
                    <div className="absolute top-3 left-3 bg-tenten-primary text-tenten-bg text-xs font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      <span>Favorit</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-tenten-dark/70 backdrop-blur-sm text-tenten-bg text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-tenten-dark group-hover:text-tenten-primary transition-colors tracking-tight">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-tenten-dark/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price Row (NO individual order button as per strict constraint) */}
                  <div className="mt-5 pt-4 border-t border-tenten-dark/10 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-tenten-muted">
                      Harga
                    </span>
                    <span className="text-lg font-extrabold text-tenten-primary">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;

