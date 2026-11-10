import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 'm-1',
    name: 'Bubur Ayam TenTen',
    category: 'Makanan',
    price: 18000,
    description:
      'Bubur gurih lembut berpadu suwiran ayam gurih, cakwe renyah, dan kuah kaldu kuning khas rumahan.',
    image: '/assets/bubur.jpg',
    isFavorite: true,
    illustrationKey: 'bubur',
  },
  {
    id: 'm-2',
    name: 'Nasi Kuning Komplit',
    category: 'Makanan',
    price: 20000,
    description:
      'Nasi kuning harum rempah alami dengan lauk telur balado, orek tempe manis gurih, bihun kampung, dan sambal khas.',
    image: '/assets/nasi_kuning.jpg',
    isFavorite: true,
    illustrationKey: 'nasi_kuning',
  },
  {
    id: 'm-3',
    name: 'Lontong Sayur Gurih',
    category: 'Makanan',
    price: 18000,
    description:
      'Lontong pulen berkuah santan labu siam gurih hangat, tahu, telur, dan kerupuk garing.',
    image: '/assets/lontong_sayur.jpg',
    isFavorite: false,
    illustrationKey: 'lontong_sayur',
  },
  {
    id: 'd-1',
    name: 'Es Teh Manis Segar',
    category: 'Minuman',
    price: 5000,
    description:
      'Seduhan daun teh melati pilihan dengan manis seimbang penyegar pagi.',
    image: '/assets/minuman.jpg',
    isFavorite: false,
    illustrationKey: 'es_teh',
  },
  {
    id: 'd-2',
    name: 'Es Jeruk Murni',
    category: 'Minuman',
    price: 8000,
    description:
      'Perasan buah jeruk segar kaya vitamin C disajikan dingin melegakan.',
    image: '/assets/minuman.jpg',
    isFavorite: true,
    illustrationKey: 'es_jeruk',
  },
  {
    id: 'd-3',
    name: 'Es Kacang Hijau Santan',
    category: 'Minuman',
    price: 10000,
    description:
      'Kacang hijau rebus empuk legit dengan kuah santan gurih dan es serut manis.',
    image: '/assets/minuman.jpg',
    isFavorite: false,
    illustrationKey: 'es_kacang_hijau',
  },
];

export default menuItems;
