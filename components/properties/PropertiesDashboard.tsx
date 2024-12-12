"use client";

import { Header } from "@/components/Header";
import { PropertyList } from "@/components/PropertyList";

export function PropertiesDashboard() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">All Properties</h2>
        <PropertyList />
      </div>
    </div>
  );
}