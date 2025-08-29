import React from "react";
import Card from "@/components/Card";

const products = [
  {
    id: 1,
    title: "Nike Air Force 1 Mid '07",
    subtitle: "Men's Shoes",
    colorInfo: "6 Colour",
    price: 98.3,
    imageSrc: "/shoes/shoe-1.jpg",
    badge: { label: "Best Seller", variant: "warning" as const },
  },
  {
    id: 2,
    title: "Nike Court Vision Low Next Nature",
    subtitle: "Men's Shoes",
    colorInfo: "4 Colour",
    price: 98.3,
    imageSrc: "/shoes/shoe-2.webp",
    badge: { label: "Extra 20% off", variant: "success" as const },
  },
  {
    id: 3,
    title: "Nike Dunk Low Retro",
    subtitle: "Men's Shoes",
    colorInfo: "6 Colour",
    price: 98.3,
    imageSrc: "/shoes/shoe-3.webp",
    badge: { label: "Extra 10% off", variant: "success" as const },
  },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="mb-6 text-heading-2 font-jost">Latest shoes</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            subtitle={p.subtitle}
            colorInfo={p.colorInfo}
            price={p.price}
            imageSrc={p.imageSrc}
            badge={p.badge}
          />
        ))}
      </section>
    </main>
  );
}
