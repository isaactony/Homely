"use client";

import { Header } from './Header';
import { PropertyList } from './PropertyList';
import { PropertyDetails } from './PropertyDetails';

export function Dashboard() {
  return (
    <main className="flex-1 overflow-auto">
      <Header />
      <div className="flex p-6">
        <div className="w-[600px] mr-6 flex-shrink-0">
          <PropertyList />
        </div>
        <div className="flex-1">
          <PropertyDetails />
        </div>
      </div>
    </main>
  );
}