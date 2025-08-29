import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    category: 'Shoes',
    brand: 'Nike',
    size: '10',
    color: 'White/Black',
    stock: 25,
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike',
    size: '9.5',
    color: 'White',
    stock: 30,
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.',
    price: '29.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16a4b0a9-3c7e-4e6e-9b4a-8b8b8b8b8b8b/dri-fit-mens-fitness-t-shirt-2QjSZw.png',
    category: 'Apparel',
    brand: 'Nike',
    size: 'L',
    color: 'Black',
    stock: 50,
  },
  {
    name: 'Nike Swoosh Sports Bra',
    description: 'The Nike Swoosh Sports Bra gives you the support and comfort you need for your workout.',
    price: '39.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d/swoosh-womens-sports-bra-3QkTAx.png',
    category: 'Apparel',
    brand: 'Nike',
    size: 'M',
    color: 'Pink',
    stock: 20,
  },
  {
    name: 'Nike React Infinity Run',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    price: '159.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d/react-infinity-run-flyknit-mens-running-shoe-4RmTLj.png',
    category: 'Shoes',
    brand: 'Nike',
    size: '11',
    color: 'Blue/White',
    stock: 15,
  },
  {
    name: 'Nike Tech Fleece Hoodie',
    description: 'The Nike Tech Fleece Hoodie features premium fleece fabric that provides warmth without the weight.',
    price: '89.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b7c8d9e-0f1a-2b3c-4d5e-6f7a8b9c0d1e/tech-fleece-mens-hoodie-5SnUMk.png',
    category: 'Apparel',
    brand: 'Nike',
    size: 'XL',
    color: 'Gray',
    stock: 35,
  },
];

async function seed() {
  try {
    console.log('Seeding Nike products...');
    
    for (const product of nikeProducts) {
      await db.insert(products).values(product);
      console.log(`Added: ${product.name}`);
    }
    
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

seed();