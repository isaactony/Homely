"use client";

import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const clients = [
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    properties: 2,
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    name: "Michael Chen",
    email: "m.chen@example.com",
    properties: 1,
    status: "Pending",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  }
];

export function ClientsDashboard() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Clients</h2>
          <Button>Add New Client</Button>
        </div>
        <div className="space-y-4">
          {clients.map((client) => (
            <Card key={client.email} className="p-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <img src={client.avatar} alt={client.name} />
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.email}</p>
                </div>
                <div className="text-sm">
                  <p>{client.properties} Properties</p>
                  <p className={client.status === "Active" ? "text-green-500" : "text-orange-500"}>
                    {client.status}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}