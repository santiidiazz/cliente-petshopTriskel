// src/components/Header.tsx
import { useState, useEffect } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-forest-500 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform">
            🐾
          </div>
          <div>
            <span className="font-display font-900 text-xl text-forest-700 leading-none block">
              Triskel
            </span>
            <span className="font-body text-xs text-forest-500 leading-none">
              Petshop
            </span>
          </div>
        </a>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '#catalogo', label: 'Catálogo' },
            { href: '#envios', label: 'Envíos' },
            { href: '#contacto', label: 'Contacto' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-500 text-forest-700 hover:text-forest-500 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cart Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-4 py-2 rounded-2xl font-display font-700 text-sm transition-all duration-200 hover:scale-105 shadow-md"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">Mi pedido</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-forest-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-900 shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-forest-700 hover:bg-forest-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-forest-100 px-4 py-4 flex flex-col gap-3">
          {[
            { href: '#catalogo', label: '🐾 Catálogo' },
            { href: '#envios', label: '🚚 Envíos' },
            { href: '#contacto', label: '📞 Contacto' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body font-500 text-forest-700 hover:text-forest-500 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}