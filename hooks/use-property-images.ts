import { useMemo } from 'react';
import { IMAGES } from '@/config/images';

export function usePropertyImages() {
  const mainImage = useMemo(() => IMAGES.properties.building2, []);
  const interiorImages = useMemo(() => Object.values(IMAGES.interiors), []);

  return {
    mainImage,
    interiorImages,
  };
}