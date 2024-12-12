"use client";

import { Bath, Car, Ruler, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { PropertyStats } from './properties/property-stats';
import { usePropertyImages } from '@/hooks/use-property-images';

export function PropertyDetails() {
  const { mainImage, interiorImages } = usePropertyImages();

  return (
    <div className="h-full">
      <div className="relative rounded-lg overflow-hidden mb-4">
        <img
          alt="Property"
          className="w-full h-[400px] object-cover"
          src={mainImage}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {interiorImages.map((url, i) => (
            <img
              key={i}
              alt={`Interior ${i}`}
              className="w-20 h-20 rounded-lg object-cover border-2 border-white"
              src={url}
            />
          ))}
        </div>
        <Button className="absolute bottom-4 right-4">
          Book a tour
        </Button>
      </div>
      
      <h2 className="text-2xl font-semibold mb-2">Serenity Heights</h2>
      <p className="text-muted-foreground mb-6">414 E, Clark street, Vermillion</p>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Bedroom</p>
            <p className="font-semibold">3</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Bathroom</p>
            <p className="font-semibold">3</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Ruler className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Area</p>
            <p className="font-semibold">656 m²</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Car className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Parking</p>
            <p className="font-semibold">7</p>
          </div>
        </div>
      </div>

      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-2">Property details</h3>
        <p className="text-sm text-muted-foreground">
          This spacious and modern rental property is located in a desirable neighbourhood, 
          offering a comfortable and convenient living space. The elevated...
          <Button variant="link" className="px-1 h-auto">See More</Button>
        </p>
      </Card>

      <PropertyStats />
    </div>
  );
}