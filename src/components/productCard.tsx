// src/components/ProductCard.tsx
import { useState } from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product, qty: number) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product, qty);
    setAdded(true);
    setQty(1);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-4xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-forest-50 flex flex-col gap-4">
      {/* Emoji / Image area */}
      <div className="bg-gradient-to-br from-forest-50 to-paw rounded-3xl aspect-square flex items-center justify-center text-5xl">
        {product.emoji}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 flex-1">
        {/* Pet type badge */}
        <span className="inline-flex items-center bg-forest-100 text-forest-600 text-xs font-display font-700 px-2.5 py-1 rounded-full w-fit">
          {product.petType}
        </span>
        <h3 className="font-display font-800 text-base text-forest-800 leading-tight mt-1">
          {product.name}
        </h3>
        <p className="font-body text-xs text-forest-400 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="font-body text-xs text-forest-400">$</span>
        <span className="font-display font-900 text-2xl text-forest-700">
          {product.price}
        </span>
        <span className="font-body text-xs text-forest-400">/ {product.unit}</span>
      </div>

      {/* Quantity + Add */}
      <div className="flex items-center gap-2">
        {/* Quantity control */}
        <div className="flex items-center gap-1 bg-forest-50 rounded-2xl p-1">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-7 h-7 rounded-xl bg-white text-forest-600 font-display font-800 hover:bg-forest-100 transition-colors flex items-center justify-center text-base shadow-sm"
          >
            −
          </button>
          <span className="w-7 text-center font-display font-800 text-forest-700 text-sm">
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-7 h-7 rounded-xl bg-white text-forest-600 font-display font-800 hover:bg-forest-100 transition-colors flex items-center justify-center text-base shadow-sm"
          >
            +
          </button>
        </div>

        {/* Add button */}
        <button
          onClick={handleAdd}
          className={`flex-1 py-2 rounded-2xl font-display font-800 text-sm transition-all duration-200 ${
            added
              ? 'bg-amber-400 text-forest-900 scale-95'
              : 'bg-forest-500 hover:bg-forest-600 text-white hover:scale-105 shadow-md'
          }`}
        >
          {added ? '✓ Agregado' : 'Agregar'}
        </button>
      </div>
    </div>
  );
}