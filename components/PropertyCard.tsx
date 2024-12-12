"use client";

import { Heart, Users, Bath, Ruler } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex p-4 gap-4">
        <img
          alt={property.name}
          className="w-24 h-24 rounded-lg object-cover"
          src={property.image}
        />
        <div className="flex-1">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{property.name}</h3>
                <p className="text-sm text-muted-foreground">{property.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">${property.price.toLocaleString()}</p>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-muted-foreground hover:text-red-500"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{property.bedrooms} bed • {property.guests} Guests</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.baths} bath</span>
              </div>
              <div className="flex items-center gap-1">
                <Ruler className="h-4 w-4" />
                <span>{property.area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}