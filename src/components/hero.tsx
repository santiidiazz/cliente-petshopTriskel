// src/components/Hero.tsx

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-forest-50 via-cream to-paw"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-forest-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

      {/* Floating paw prints decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {['🐾', '🐾', '🐾', '🐾', '🐾'].map((paw, i) => (
          <span
            key={i}
            className="absolute text-forest-200 opacity-60"
            style={{
              fontSize: `${1.5 + i * 0.4}rem`,
              top: `${10 + i * 16}%`,
              left: `${5 + i * 18}%`,
              transform: `rotate(${-20 + i * 12}deg)`,
            }}
          >
            {paw}
          </span>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-display font-700 w-fit border border-forest-200">
            <span>🌿</span> Montevideo · Envío a domicilio
          </div>

          {/* Headline */}
          <h1 className="font-display font-900 text-5xl md:text-6xl lg:text-7xl text-forest-800 leading-tight">
            Tu mascota
            <br />
            <span className="text-forest-500 relative">
              merece lo
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-amber-300/60 -z-10 rounded-full" />
            </span>
            <br />
            mejor 🐾
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg text-forest-600 max-w-md leading-relaxed">
            Alimentos, accesorios y shampoos para perros, gatos, peces, conejos y aves.
            Pedí por WhatsApp y lo llevamos hasta tu puerta.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#catalogo"
              className="bg-forest-500 hover:bg-forest-600 text-white px-7 py-3.5 rounded-2xl font-display font-800 text-base transition-all hover:scale-105 shadow-lg shadow-forest-500/30"
            >
              Ver catálogo →
            </a>
            <a
              href="https://wa.me/59898947405"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-forest-50 text-forest-700 border-2 border-forest-200 px-7 py-3.5 rounded-2xl font-display font-800 text-base transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4 pt-4 border-t border-forest-100">
            {[
              { num: '5', label: 'tipos de mascotas' },
              { num: '📦', label: 'Envío a domicilio' },
              { num: '💚', label: 'Con amor' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-900 text-xl text-forest-600">{stat.num}</div>
                <div className="font-body text-xs text-forest-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative">
            {/* Main card */}
            <div className="bg-white rounded-5xl p-8 shadow-float w-80 border border-forest-100">
              <div className="text-8xl text-center mb-4 leading-none">🐾</div>
              <h3 className="font-display font-900 text-2xl text-forest-700 text-center mb-2">
                Petshop Triskel
              </h3>
              <p className="font-body text-forest-500 text-center text-sm">
                Tu tienda de confianza para el cuidado de tus mascotas
              </p>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {['🐕', '🐈', '🐠', '🐰', '🦜'].map((pet) => (
                  <div
                    key={pet}
                    className="aspect-square bg-forest-50 rounded-2xl flex items-center justify-center text-2xl hover:bg-forest-100 transition-colors cursor-default"
                  >
                    {pet}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="absolute -top-4 -right-4 bg-amber-400 text-forest-900 px-3 py-2 rounded-2xl font-display font-800 text-sm shadow-lg rotate-6">
              🚚 Delivery
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -bottom-4 -left-4 bg-forest-500 text-white px-3 py-2 rounded-2xl font-display font-800 text-sm shadow-lg -rotate-3">
              📱 WhatsApp
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}