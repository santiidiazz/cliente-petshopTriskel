// src/components/Shipping.tsx

export default function Shipping() {
  return (
    <section id="envios" className="py-20 bg-gradient-to-b from-white to-forest-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-display font-700 mb-4">
            🚚 Información de envío
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-forest-800 mb-4">
            Llevamos tu pedido
          </h2>
          <p className="font-body text-forest-500 max-w-md mx-auto">
            Hacemos entregas a domicilio en Montevideo. Calculá el costo según tu distancia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Shipping info cards */}
          <div className="flex flex-col gap-5">
            {/* Location card */}
            <div className="bg-white rounded-4xl p-6 shadow-card border border-forest-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-forest-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                📍
              </div>
              <div>
                <h3 className="font-display font-800 text-lg text-forest-800 mb-1">
                  Nuestra ubicación
                </h3>
                <p className="font-body text-forest-600 font-500">
                  Londres 3452, Montevideo
                </p>
                <p className="font-body text-xs text-forest-400 mt-1">
                  Cerca del Antel Arena
                </p>
              </div>
            </div>

            {/* Free delivery card */}
            <div className="bg-gradient-to-br from-forest-500 to-forest-600 rounded-4xl p-6 shadow-lg text-white flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                🎉
              </div>
              <div>
                <h3 className="font-display font-800 text-lg mb-1">
                  Envío gratis
                </h3>
                <p className="font-body opacity-90 text-sm leading-relaxed">
                  Para pedidos dentro de los primeros <strong>3 km</strong> del Antel Arena el envío es completamente <strong>gratuito</strong>.
                </p>
              </div>
            </div>

            {/* Extra km card */}
            <div className="bg-white rounded-4xl p-6 shadow-card border border-amber-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                🗺️
              </div>
              <div>
                <h3 className="font-display font-800 text-lg text-forest-800 mb-1">
                  Más de 3 km
                </h3>
                <p className="font-body text-forest-600 text-sm leading-relaxed">
                  Se suma <span className="font-700 text-amber-600">$30 por cada kilómetro adicional</span> a partir del km 3 desde el Antel Arena.
                </p>
              </div>
            </div>

            {/* WhatsApp consult */}
            <div className="bg-forest-50 rounded-4xl p-5 border border-forest-100 flex items-center gap-4">
              <div className="text-3xl">💬</div>
              <div className="flex-1">
                <p className="font-display font-700 text-forest-700 text-sm">
                  ¿No sabés cuánto te queda?
                </p>
                <p className="font-body text-forest-500 text-xs">
                  Consultanos por WhatsApp y te calculamos el costo exacto.
                </p>
              </div>
              <a
                href="https://wa.me/59898947405?text=Hola%20Triskel!%20Quiero%20consultar%20el%20costo%20de%20envío%20a%20mi%20dirección."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2 rounded-2xl font-display font-700 text-xs hover:bg-[#20bb5a] transition-colors whitespace-nowrap flex-shrink-0"
              >
                Consultar
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-4xl overflow-hidden shadow-float border border-forest-100 bg-white">
            <div className="p-4 bg-forest-50 border-b border-forest-100 flex items-center gap-2">
              <span className="text-lg">🗺️</span>
              <span className="font-display font-700 text-forest-700 text-sm">
                Londres 3452, Montevideo
              </span>
            </div>
            <iframe
              title="Ubicación Petshop Triskel"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-56.1850%2C-34.9050%2C-56.1650%2C-34.8850&layer=mapnik&marker=-34.8950%2C-56.1750"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="p-4 bg-forest-50 border-t border-forest-100">
              <a
                href="https://www.google.com/maps/search/Londres+3452+Montevideo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-forest-600 hover:text-forest-800 font-display font-700 text-sm transition-colors"
              >
                <span>📍</span> Abrir en Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Distance estimator visual */}
        <div className="mt-10 bg-white rounded-4xl p-8 shadow-card border border-forest-100">
          <h3 className="font-display font-800 text-xl text-forest-800 mb-6 text-center">
            ¿Cuánto pago de envío? 📦
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {[
              { range: 'Menos de 3 km', cost: 'Gratis 🎉', color: 'bg-forest-50 border-forest-200 text-forest-700', badge: 'bg-forest-500 text-white' },
              { range: '3 a 4 km', cost: '$30', color: 'bg-amber-50 border-amber-200 text-amber-800', badge: 'bg-amber-400 text-forest-900' },
              { range: '4 a 5 km', cost: '$60', color: 'bg-amber-50 border-amber-200 text-amber-800', badge: 'bg-amber-400 text-forest-900' },
              { range: '5 a 6 km', cost: '$90', color: 'bg-orange-50 border-orange-200 text-orange-800', badge: 'bg-orange-400 text-white' },
            ].map((item) => (
              <div
                key={item.range}
                className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-3xl border-2 ${item.color}`}
              >
                <span className={`font-display font-900 text-lg px-3 py-1 rounded-full ${item.badge}`}>
                  {item.cost}
                </span>
                <span className="font-body text-sm font-500">{item.range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}