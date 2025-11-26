import React from 'react';
import { SHOP_PRODUCTS } from '../constants';
import { ShoppingCart } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <div>
      <div className="bg-black text-white py-12 text-center">
        <h1 className="font-serif text-4xl text-gold-400 mb-2">La Boutique Nanass</h1>
        <p className="text-gray-400">Les indispensables pour votre routine.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SHOP_PRODUCTS.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-gold-500 hover:text-white transition">
                  <ShoppingCart size={20} />
                </button>
              </div>
              <div className="text-sm text-gray-500 mb-1">{product.category}</div>
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className="text-gold-600 font-bold">{product.price.toFixed(2)} €</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;