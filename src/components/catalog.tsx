// src/components/Catalog.tsx
import { useState } from 'react';
import ProductCard from './productCard';
import { products, petTypes, categories } from '../data/products';
import type { Product } from '../types';

interface CatalogProps {
  onAddToCart: (product: Product, qty: number) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [selectedPet, setSelectedPet] = useState<string>('Todos');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filtered = products.filter((p) => {
    const petMatch = selectedPet === 'Todos' || p.petType === selectedPet;
    const catMatch = selectedCategory === 'Todos' || p.category === selectedCategory;
    return petMatch && catMatch;
  });

  return (
    <section id="catalogo" className="bg-white">
      
      {/* Imagen portada — full width, justo debajo de las promociones */}
      <div className="w-full">
        <img
          src="/imagen_portada.png"
          alt="Portada Petshop Triskel"
          className="w-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-10 pb-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-forest-100 text-forest-600 px-4 py-2 rounded-full text-sm font-display font-700 mb-4">
            🛍️ Nuestros productos
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-forest-800 mb-4">
            Catálogo completo
          </h2>
          <p className="font-body text-forest-500 max-w-md mx-auto">
            Todo lo que tu mascota necesita, con la calidad que se merece.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Pet type filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {petTypes.map((pet) => (
              <button
                key={pet}
                onClick={() => setSelectedPet(pet)}
                className={`px-4 py-2 rounded-2xl font-display font-700 text-sm transition-all duration-200 ${
                  selectedPet === pet
                    ? 'bg-forest-500 text-white shadow-md scale-105'
                    : 'bg-forest-50 text-forest-600 hover:bg-forest-100 border border-forest-100'
                }`}
              >
                {pet === 'Todos' && '🌿 '}
                {pet === 'Perros' && '🐕 '}
                {pet === 'Gatos' && '🐈 '}
                {pet === 'Peces' && '🐠 '}
                {pet === 'Conejos' && '🐰 '}
                {pet === 'Aves' && '🦜 '}
                {pet}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl font-body font-500 text-xs transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-forest-900 shadow-sm'
                    : 'bg-gray-100 text-gray-500 hover:bg-amber-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BANNER: TRABAJAMOS CON TODAS LAS MARCAS */}
        <div className="bg-amber-50 border-2 border-amber-100 rounded-3xl p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="text-3xl hidden sm:block">💡</div>
            <div>
              <p className="font-display font-800 text-amber-800 text-lg">¿No encontrás lo que buscás?</p>
              <p className="font-body text-amber-700 text-sm">
                Trabajamos con <strong>todas las marcas</strong>, solo consulte, gracias.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/59898947405?text=Hola%20Triskel!%20Estoy%20buscando%20un%20producto%20de%20una%20marca%20específica..."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 bg-white border-2 border-amber-200 hover:bg-amber-100 text-amber-800 font-display font-800 text-sm rounded-2xl transition-all shadow-sm"
          >
            Consultar stock 💬
          </a>
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-forest-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-display font-700 text-xl">No hay productos con esos filtros</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}