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
    <div className="bg-white rounded-4xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-forest-50 flex flex-col gap-4 h-full">
      
      {/* Área de Imagen / Emoji */}
      <div className="bg-gradient-to-br from-forest-50 to-paw rounded-3xl aspect-square flex items-center justify-center overflow-hidden flex-shrink-0">
        {product.image ? (
          <img
            src={`/${product.image}`} // Esto busca en la raíz de la carpeta public
            alt={product.name}
            className="w-full h-full object-cover rounded-3xl"
            onError={(e) => {
              // Si la imagen no carga (ej: el nombre está mal escrito), muestra el emoji
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
        ) : null}
        <span
          className="text-5xl"
          style={product.image ? { display: 'none' } : {}}
        >
          {product.emoji}
        </span>
      </div>

      {/* Información del Producto */}
      <div className="flex flex-col gap-1 flex-1">
        {/* Badge del tipo de mascota (Perros, Gatos, etc.) */}
        <span className="inline-flex items-center bg-forest-100 text-forest-600 text-[10px] font-display font-700 px-2.5 py-1 rounded-full w-fit uppercase tracking-wider">
          {product.petType}
        </span>

        {/* Nombre del Producto */}
        <h3 className="font-display font-800 text-base text-forest-800 leading-tight mt-1">
          {product.name}
        </h3>

        {/* Descripción (Aparecerá "Comida cachorro", etc.) */}
        <p className="font-body text-xs text-forest-400 leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Precio y Unidad */}
      <div className="flex items-baseline gap-1">
        <span className="font-body text-xs text-forest-400">$</span>
        <span className="font-display font-900 text-2xl text-forest-700">
          {product.price}
        </span>
        <span className="font-body text-xs text-forest-400">/ {product.unit}</span>
      </div>

      {/* Selector de Cantidad y Botón */}
      <div className="flex items-center gap-2">
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