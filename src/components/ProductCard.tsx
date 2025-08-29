import Image from 'next/image';
import { Product } from '@/lib/db/schema';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative bg-gray-100">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-gray-900 ml-2">
            ${product.price}
          </span>
        </div>
        
        {product.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-3">
          {product.brand && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {product.brand}
            </span>
          )}
          {product.category && (
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {product.category}
            </span>
          )}
          {product.color && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              {product.color}
            </span>
          )}
          {product.size && (
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
              Size {product.size}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              product.stock > 0 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
}