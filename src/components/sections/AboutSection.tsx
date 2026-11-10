import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, UtensilsCrossed, ShieldCheck } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
}

const pillars: Pillar[] = [
  {
    id: 'pillar-1',
    title: 'Bahan Segar Setiap Subuh',
    description:
      'Dipilih teliti dari pasar lokal setiap subuh untuk memastikan kesegaran sayur, daging ayam pilihan, dan bumbu rempah alami.',
    icon: Sparkles,
  },
  {
    id: 'pillar-2',
    title: 'Resep Rempah Warisan',
    description:
      'Kuah kaldu kuning gurih dan bumbu santan khas rumahan yang dimasak perlahan dengan takaran rempah nusantara autentik.',
    icon: UtensilsCrossed,
  },
  {
    id: 'pillar-3',
    title: 'Porsi Pas & Higienis',
    description:
      'Disajikan higienis dengan standar kebersihan terjaga, menghasilkan porsi sarapan pas yang mengenyangkan untuk memulai rutinitas pagi.',
    icon: ShieldCheck,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="tentang"
      className="py-16 md:py-24 bg-tenten-bg relative scroll-mt-16 md:scroll-mt-20"
      aria-label="Tentang Warung TenTen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tenten-primary bg-tenten-primary/10 px-3 py-1 rounded-full mb-3">
            Cerita & Nilai Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tenten-dark tracking-tight">
            Sarapan yang Dimasak dengan Sepenuh Hati
          </h2>
          <p className="mt-3 text-sm sm:text-base text-tenten-dark/75 leading-relaxed">
            Menyajikan kehangatan rasa rumahan khas nusantara yang bersih, ramah keluarga, dan selalu
            disiapkan segar setiap pagi di Pangkalan Bun.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                className="bg-tenten-surface rounded-2xl p-6 sm:p-8 border border-tenten-dark/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-tenten-primary/10 text-tenten-primary flex items-center justify-center mb-5 group-hover:bg-tenten-primary group-hover:text-tenten-bg transition-colors duration-300">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-tenten-dark mb-2.5 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-tenten-dark/75 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

