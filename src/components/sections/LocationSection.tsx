import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { MapPin, Clock, ExternalLink, Navigation, Car, HeartHandshake, CheckCircle } from 'lucide-react';

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

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address
  )}`;

  const perks = [
    { label: 'Area Parkir Nyaman & Aman', icon: Car },
    { label: 'Suasana Bersih & Ramah Keluarga', icon: HeartHandshake },
    { label: 'Saji Cepat untuk Pekerja Pagi', icon: CheckCircle },
  ];

  return (
    <section
      id="lokasi"
      className="py-16 md:py-24 bg-tenten-bg relative scroll-mt-16 md:scroll-mt-20 border-t border-tenten-dark/10"
      aria-label="Lokasi dan Jam Operasional Warung TenTen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tenten-primary bg-tenten-primary/10 px-3 py-1 rounded-full mb-3">
            Kunjungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-tenten-dark tracking-tight">
            Lokasi & Jam Operasional
          </h2>
          <p className="mt-3 text-sm sm:text-base text-tenten-dark/75 leading-relaxed">
            Temukan kehangatan sarapan pagi di warung kami. Kami siap menyambut Anda dan keluarga
            setiap pagi dengan sajian segar.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Column */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {/* Address Card */}
            <div className="bg-tenten-surface p-6 sm:p-8 rounded-2xl border border-tenten-dark/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tenten-primary/10 text-tenten-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-tenten-muted">
                  Alamat Warung
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-tenten-dark mt-0.5">
                  {siteConfig.name}
                </h3>
                <p className="text-sm sm:text-base text-tenten-dark/80 mt-1 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-tenten-surface p-6 sm:p-8 rounded-2xl border border-tenten-dark/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tenten-primary/10 text-tenten-primary flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-tenten-muted">
                  Jam Buka
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-tenten-dark mt-0.5">
                  {siteConfig.openingHours}
                </h3>
                <p className="text-sm text-tenten-dark/75 mt-1 leading-relaxed">
                  Dimasak segar sejak subuh untuk melayani sarapan Anda tepat waktu sebelum memulai hari.
                </p>
              </div>
            </div>

            {/* Extra Perks List */}
            <div className="bg-tenten-surface p-6 rounded-2xl border border-tenten-dark/10 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-tenten-muted block mb-3">
                Kenyamanan Berkunjung
              </span>
              <ul className="space-y-2.5">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <li key={perk.label} className="flex items-center gap-2.5 text-sm font-semibold text-tenten-dark/85">
                      <Icon className="w-4 h-4 text-tenten-primary" aria-hidden="true" />
                      <span>{perk.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* Visual Map Locator Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 bg-tenten-surface rounded-2xl border border-tenten-dark/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Ambient Map Illustration Placeholder */}
            <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-tenten-dark/5 border border-tenten-dark/10 flex flex-col items-center justify-center p-6 text-center group">
              {/* Decorative grid pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-15 bg-[radial-gradient(#1E1E24_1px,transparent_1px)] [background-size:16px_16px]"
              />

              {/* Pulsing Pin Marker */}
              <div className="relative z-10 flex flex-col items-center mb-3">
                <div className="w-14 h-14 rounded-full bg-tenten-primary text-tenten-bg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" aria-hidden="true" />
                </div>
                <div className="mt-2.5 bg-tenten-dark text-tenten-bg text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                  {siteConfig.name}
                </div>
              </div>

              <span className="text-xs font-semibold text-tenten-muted relative z-10">
                Pangkalan Bun, Kalimantan Tengah
              </span>
            </div>

            {/* Google Maps External Action Button */}
            <div className="mt-6 pt-5 border-t border-tenten-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-tenten-dark/75">
                <Navigation className="w-4 h-4 text-tenten-primary flex-shrink-0" aria-hidden="true" />
                <span>Petunjuk arah langsung via Google Maps</span>
              </div>

              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Buka petunjuk arah ${siteConfig.name} di Google Maps`}
                className="inline-flex items-center justify-center gap-2 bg-tenten-dark hover:bg-tenten-dark/90 text-tenten-bg text-sm font-bold px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tenten-primary w-full sm:w-auto"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
