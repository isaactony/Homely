"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis } from 'recharts';
import { cn } from '@/lib/utils';

interface PriceChartProps {
  data: Array<{ month: string; price: number }>;
  className?: string;
}

export function PriceChart({ data, className }: PriceChartProps) {
  return (
    <div className={cn("w-full h-[200px]", className)}>
      <ResponsiveContainer>
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
    </div>
  );
}