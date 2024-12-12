"use client";

import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "Purchase",
    property: "Sunset Paradise",
    amount: 75000,
    date: "2024-03-15",
    status: "Completed"
  },
  {
    id: 2,
    type: "Sale",
    property: "Urban Heights",
    amount: 95000,
    date: "2024-03-10",
    status: "Pending"
  }
];

export function TransactionDashboard() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="p-4">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === "Purchase" ? "bg-green-100" : "bg-blue-100"
                }`}>
                  {transaction.type === "Purchase" ? (
                    <ArrowDownRight className="h-5 w-5 text-green-600" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{transaction.property}</h3>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${transaction.amount.toLocaleString()}
                  </p>
                  <p className={`text-sm ${
                    transaction.status === "Completed" ? "text-green-500" : "text-orange-500"
                  }`}>
                    {transaction.status}
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