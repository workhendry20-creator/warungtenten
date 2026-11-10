export type MenuCategory = 'Semua' | 'Makanan' | 'Minuman';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Makanan' | 'Minuman';
  price: number;
  description: string;
  image: string;
  isFavorite?: boolean;
  illustrationKey?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  address: string;
  openingHours: string;
  whatsappMessage: string;
}
