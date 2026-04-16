// src/components/Promotions.tsx
import { useState } from 'react';
import type { Product } from '../types';

interface PromotionsProps {
  onAddToCart: (product: Product, qty: number) => void;
}

type Fragrance = 'Lavanda' | 'Limón' | 'Manzana';
type Size = '5 litros' | '10 litros' | '25 litros' | '50 litros';

const bentonitaPrices: Record<Size, number> = {
  '5 litros': 290,
  '10 litros': 590,
  '25 litros': 1290,
  '50 litros': 1990,
};

export default function Promotions({ onAddToCart }: PromotionsProps) {
  // Estado para la tarjeta interactiva de Bentonita
  const [fragrance, setFragrance] = useState<Fragrance>('Lavanda');
  const [size, setSize] = useState<Size>('5 litros');
  const [addedPromo, setAddedPromo] = useState<string | null>(null);

  // Función genérica para mostrar feedback visual
  const handleAdd = (product: Product, promoId: string) => {
    onAddToCart(product, 1);
    setAddedPromo(promoId);
    setTimeout(() => setAddedPromo(null), 1500);
  };

  return (
    <section className="bg-[#FAF8F5] py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Encabezado */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-display font-800 mb-4">
            ⚡ Ofertas especiales
          </span>
          <h2 className="font-display font-900 text-4xl text-forest-800 mb-2">
            Promociones de la semana
          </h2>
          <p className="font-body text-forest-600">
            Aprovechá estos precios especiales para tu mascota.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Promo 1: Primocao */}
          <div className="bg-amber-50/50 rounded-4xl p-6 border-2 border-amber-200 flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-40 h-40 bg-white rounded-3xl flex-shrink-0 p-2 shadow-sm">
              {/* CAMBIAR IMAGEN ACÁ */}
              <img src="/primocao.webp" alt="Primocao 29kg" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 flex flex-col items-start w-full">
              <span className="bg-orange-100 text-orange-700 text-[10px] font-display font-800 px-2 py-1 rounded-full uppercase tracking-wider mb-2">
                🔥 Más vendido
              </span>
              <h3 className="font-display font-900 text-xl text-forest-800">Primocao 29kg</h3>
              <p className="font-body text-sm text-forest-600 mb-4 line-clamp-2">
                Alimento premium para perros adultos. Bolsa grande rendidora.
              </p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display font-900 text-3xl text-forest-700">$2.790</span>
                <span className="font-body text-xs text-forest-500">/ 29kg</span>
              </div>
              <button
                onClick={() => handleAdd({
                  id: 'promo-primocao', name: 'Primocao (Promo)', price: 2790, category: 'Alimentos', petType: 'Perros', emoji: '🐕', image: 'primocao.jpg', description: 'Promo 29kg', unit: '29kg'
                }, 'primocao')}
                className={`w-full py-3 rounded-2xl font-display font-800 text-sm transition-all ${
                  addedPromo === 'primocao' ? 'bg-amber-400 text-forest-900' : 'bg-white border-2 border-amber-200 text-amber-700 hover:bg-amber-100'
                }`}
              >
                {addedPromo === 'primocao' ? '✓ Agregado al carrito' : 'Pedir Promo'}
              </button>
            </div>
          </div>

          {/* Promo 2: Gran Plus + Mochila */}
          <div className="bg-white rounded-4xl p-6 border-2 border-forest-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-40 h-40 bg-forest-50 rounded-3xl flex-shrink-0 p-2">
              {/* CAMBIAR IMAGEN ACÁ */}
              <img src="/granplus-adulto-mochila.webp" alt="Gran Plus + Mochila" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 flex flex-col items-start w-full">
              <span className="bg-indigo-100 text-indigo-700 text-[10px] font-display font-800 px-2 py-1 rounded-full uppercase tracking-wider mb-2">
                🎒 Kit completo
              </span>
              <h3 className="font-display font-900 text-xl text-forest-800">Gran Plus 15kg + Mochila</h3>
              <p className="font-body text-sm text-forest-600 mb-4 line-clamp-2">
                Alimento premium con mochila de regalo incluida.
              </p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display font-900 text-3xl text-forest-700">$2.790</span>
                <span className="font-body text-xs text-forest-500">/ kit</span>
              </div>
              <button
                 onClick={() => handleAdd({
                  id: 'promo-granplus', name: 'Kit Gran Plus + Mochila', price: 2790, category: 'Alimentos', petType: 'Perros', emoji: '🎒', image: 'granplus.jpg', description: 'Kit promocional', unit: 'kit'
                }, 'granplus')}
                className={`w-full py-3 rounded-2xl font-display font-800 text-sm transition-all ${
                  addedPromo === 'granplus' ? 'bg-amber-400 text-forest-900' : 'bg-forest-50 border-2 border-forest-100 text-forest-700 hover:bg-forest-100'
                }`}
              >
                {addedPromo === 'granplus' ? '✓ Agregado al carrito' : 'Pedir Kit'}
              </button>
            </div>
          </div>
        </div>

        {/* Promo 3: Bentonita (Interactiva) */}
        <div className="bg-white rounded-4xl p-6 md:p-8 border-2 border-forest-100 shadow-sm flex flex-col lg:flex-row gap-8">
          
          {/* Info y Fragancia */}
          <div className="flex-1">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-display font-800 px-2 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              ✨ Aglomerante
            </span>
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="w-32 h-32 bg-forest-50 rounded-3xl flex-shrink-0 p-2 hidden sm:block">
                 {/* CAMBIAR IMAGEN ACÁ */}
                <img src="/ventonita1.jpeg" alt="Bentonita" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div>
                <h3 className="font-display font-900 text-2xl text-forest-800 mb-2">Bentonita para gatos</h3>
                <p className="font-body text-sm text-forest-600 mb-4">
                  Aglomerante de alta absorción. Disponible en 3 fragancias y 4 tamaños.
                </p>
                
                <p className="font-display font-700 text-sm text-forest-800 mb-2">Elegí tu fragancia:</p>
                <div className="flex flex-wrap gap-2">
                  {(['Lavanda', 'Limón', 'Manzana'] as Fragrance[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFragrance(f)}
                      className={`px-4 py-2 rounded-xl text-sm font-display font-700 transition-colors border-2 ${
                        fragrance === f 
                          ? (f === 'Lavanda' ? 'border-purple-400 bg-purple-50 text-purple-700' : f === 'Limón' ? 'border-yellow-400 bg-yellow-50 text-yellow-700' : 'border-red-400 bg-red-50 text-red-700')
                          : 'border-forest-100 bg-white text-forest-500 hover:bg-forest-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tamaños y Botón */}
          <div className="flex-1 lg:border-l-2 lg:border-forest-50 lg:pl-8">
            <p className="font-display font-700 text-sm text-forest-800 mb-3">Elegí el tamaño:</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {(['5 litros', '10 litros', '25 litros', '50 litros'] as Size[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`p-3 rounded-2xl flex flex-col items-start transition-all border-2 text-left ${
                    size === s 
                      ? 'border-forest-500 bg-forest-50' 
                      : 'border-forest-100 bg-white hover:border-forest-300'
                  }`}
                >
                  <span className="font-body text-xs text-forest-600 mb-1">{s}</span>
                  <span className={`font-display font-900 text-lg ${size === s ? 'text-forest-700' : 'text-forest-800'}`}>
                    ${bentonitaPrices[s]}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleAdd({
                id: `bentonita-${fragrance.toLowerCase()}-${size.replace(' ', '')}`,
                name: `Bentonita ${fragrance} - ${size}`,
                price: bentonitaPrices[size],
                category: 'Accesorios',
                petType: 'Gatos',
                emoji: '🐈',
                image: 'bentonita.jpg',
                description: `Arena aglomerante aroma ${fragrance}`,
                unit: size
              }, 'bentonita')}
              className={`w-full py-4 rounded-2xl font-display font-900 text-base transition-all ${
                addedPromo === 'bentonita' 
                  ? 'bg-amber-400 text-forest-900 shadow-md' 
                  : 'bg-forest-500 text-white hover:bg-forest-600 shadow-lg shadow-forest-500/30 hover:scale-[1.02]'
              }`}
            >
              {addedPromo === 'bentonita' ? '✓ Agregado al carrito' : `Pedir ${size} · ${fragrance} — $${bentonitaPrices[size]}`}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}