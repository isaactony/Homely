import { useMemo } from 'react';
import { PROPERTIES } from '@/config/properties';
import type { Property } from '@/types/property';

export function useProperties(): Property[] {
  return useMemo(() => PROPERTIES, []);
}