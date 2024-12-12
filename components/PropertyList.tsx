"use client";

import { useProperties } from '@/hooks/use-properties';
import { PropertyCard } from './PropertyCard';

export function PropertyList() {
  const properties = useProperties();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">More than 1k house available</p>
        <p className="text-sm text-muted-foreground">Last added</p>
      </div>
      {properties.slice(0, 5).map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}