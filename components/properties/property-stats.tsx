"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PropertyPriceChart } from "./property-price-chart";

export function PropertyStats() {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Price Per Token</h3>
        <p className="text-sm text-muted-foreground">Starting from $50.00</p>
      </div>
      <PropertyPriceChart />
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm text-muted-foreground">244 tokens left</p>
          <div className="w-32 h-1 bg-muted rounded-full mt-1">
            <div className="w-[88%] h-full bg-primary rounded-full" />
          </div>
        </div>
        <Button>Buy</Button>
      </div>
    </Card>
  );
}