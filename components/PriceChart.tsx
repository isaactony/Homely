"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, type XAxisProps } from 'recharts';

const data = [
  { month: 'Jan', price: 45 },
  { month: 'Feb', price: 52 },
  { month: 'Mar', price: 48 },
  { month: 'Apr', price: 50 },
];

export function PriceChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          height={30}
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke="hsl(var(--primary))"
          fillOpacity={1}
          fill="url(#colorPrice)"
          dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}