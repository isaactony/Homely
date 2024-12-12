import { Property } from '@/types/property';
import { IMAGES } from './images';

export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: 'Sunset Paradise',
    type: 'Entire apartment in Center',
    bedrooms: 2,
    guests: 2,
    baths: 1,
    area: '240 m²',
    price: 75000.00,
    image: IMAGES.properties.building1
  },
  {
    id: 2,
    name: 'Serenity Heights',
    type: 'Willowcrest Apartments',
    bedrooms: 3,
    guests: 5,
    baths: 3,
    area: '656 m²',
    price: 95000.00,
    image: IMAGES.properties.building2
  },
  {
    id: 3,
    name: 'Tranquil Oaks',
    type: 'Cedarwood Manor',
    bedrooms: 2,
    guests: 4,
    baths: 2,
    area: '120 m²',
    price: 45880.00,
    image: IMAGES.properties.building3
  },
  {
    id: 4,
    name: 'Enchanted Gardens',
    type: 'Sunflower Gardens',
    bedrooms: 3,
    guests: 6,
    baths: 3,
    area: '550 m²',
    price: 91080.00,
    image: IMAGES.properties.building1
  },
  {
    id: 5,
    name: 'The Haven Residences',
    type: 'Lakeview Apartments',
    bedrooms: 1,
    guests: 2,
    baths: 1,
    area: '240 m²',
    price: 98500.00,
    image: IMAGES.properties.building2
  }
];