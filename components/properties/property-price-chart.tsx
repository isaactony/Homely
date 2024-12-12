"use client";

import { PriceChart } from "@/components/ui/price-chart";

const chartData = [
  { month: 'Jan', price: 45 },
  { month: 'Feb', price: 52 },
  { month: 'Mar', price: 48 },
  { month: 'Apr', price: 50 },
];

export function PropertyPriceChart() {
  return <PriceChart data={chartData} />;
}