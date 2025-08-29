import Card from '@/components/Card'
import React from 'react'

const products = [
  {
    id: 1,
    title: "Air Max Pulse",
    price: 149.99,
    imageSrc: "/shoes/shoe-1.jpg",
    badge: {label: "New", tone: "orange" as const}
  },
  {
    id: 2,
    title: "Air Zoom Pegasus",
    price: 129.99,
    imageSrc: "/shoes/shoe-2.webp",
    badge: {label: "Hot", tone: "red" as const}
  },
  {
    id: 3,
    title: "InfinityRN 4",
    price: 159.99,
    imageSrc: "/shoes/shoe-3.webp",
    badge: {label: "Trending", tone: "green" as const}
  },
]

const Home = () => {
  return (
    <main className='space-y-8'>
      <section>
        <h2 className='mb-4 text-heading-2 font-jost'>Latest shoes</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {products.map((p) => (
            <Card 
              key={p.id}
              title={p.title}
              price={p.price}
              imageSrc={p.imageSrc}
              badge={p.badge}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home