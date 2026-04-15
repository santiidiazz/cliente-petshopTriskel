// src/components/Cart.tsx
import { useState } from 'react';
import type { CartItem, PaymentMethod } from '../types';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQty: (productId: string, delta: number) => void;
  onRemove: (productId: string) => void;
}

const WHATSAPP_NUMBER = '59898947405';

export default function Cart({ items, isOpen, onClose, onUpdateQty, onRemove }: CartProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('efectivo');
  const [address, setAddress] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const buildWhatsAppMessage = () => {
    if (items.length === 0) return;
    if (!address.trim()) {
      alert('Por favor ingresá tu dirección para confirmar el pedido.');
      return;
    }

    const itemsList = items
      .map((item) => `• ${item.product.name} x${item.quantity} = $${item.product.price * item.quantity}`)
      .join('%0A');

    const payment = paymentMethod === 'efectivo' ? 'Efectivo' : 'Débito';

    const message =
      `Hola Triskel! Mi pedido es:%0A%0A` +
      `${itemsList}%0A%0A` +
      `*Total: $${subtotal}*%0A` +
      `Pago: ${payment}%0A` +
      `Dirección: ${encodeURIComponent(address)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-forest-100 bg-forest-50">
          <div>
            <h2 className="font-display font-900 text-xl text-forest-800">Mi pedido</h2>
            <p className="font-body text-sm text-forest-500">
              {items.length === 0 ? 'Aún no agregaste nada' : `${items.length} producto(s)`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-white text-forest-600 hover:bg-forest-100 transition-colors flex items-center justify-center text-lg font-bold shadow-sm"
          >
            ✕
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-forest-300">
              <p className="font-display font-700 text-lg text-center">
                Tu carrito está vacío
              </p>
              <p className="font-body text-sm text-center">
                Explorá el catálogo y agregá los productos que necesitás
              </p>
              <button
                onClick={onClose}
                className="bg-forest-500 text-white px-6 py-3 rounded-2xl font-display font-800 text-sm hover:bg-forest-600 transition-colors"
              >
                Ver catálogo →
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 bg-forest-50 rounded-3xl p-3 border border-forest-100"
              >
                {/* Emoji */}
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                  {item.product.emoji}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-display font-700 text-sm text-forest-800 truncate">
                    {item.product.name}
                  </p>
                  <p className="font-body text-xs text-forest-400">
                    ${item.product.price} c/u
                  </p>
                </div>
                {/* Qty controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onUpdateQty(item.product.id, -1)}
                    className="w-7 h-7 rounded-xl bg-white text-forest-600 font-display font-800 hover:bg-forest-100 transition-colors flex items-center justify-center shadow-sm text-base"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-display font-800 text-sm text-forest-700">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQty(item.product.id, 1)}
                    className="w-7 h-7 rounded-xl bg-white text-forest-600 font-display font-800 hover:bg-forest-100 transition-colors flex items-center justify-center shadow-sm text-base"
                  >
                    +
                  </button>
                </div>
                {/* Subtotal */}
                <div className="text-right ml-1">
                  <p className="font-display font-900 text-sm text-forest-700">
                    ${item.product.price * item.quantity}
                  </p>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="text-red-400 hover:text-red-600 text-xs font-body transition-colors"
                  >
                    quitar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout form + total (only if has items) */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-forest-100 flex flex-col gap-4 bg-forest-50/50">
            {/* Payment method */}
            <div>
              <p className="font-display font-700 text-sm text-forest-700 mb-2">
                Forma de pago
              </p>
              <div className="flex gap-3">
                {(['efectivo', 'debito'] as PaymentMethod[]).map((method) => (
                  <label
                    key={method}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl cursor-pointer border-2 font-display font-700 text-sm transition-all ${
                      paymentMethod === method
                        ? 'border-forest-500 bg-forest-100 text-forest-700'
                        : 'border-forest-100 bg-white text-forest-400 hover:border-forest-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="sr-only"
                    />
                    {method === 'efectivo' ? 'Efectivo' : 'Débito'}
                  </label>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="font-display font-700 text-sm text-forest-700 mb-2 block">
                 Tu dirección
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ej: Av. Italia 2345, apto 301"
                className="w-full px-4 py-3 rounded-2xl border-2 border-forest-100 bg-white font-body text-sm text-forest-700 placeholder:text-forest-300 focus:outline-none focus:border-forest-400 transition-colors"
              />
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-3 border-t border-forest-100">
              <span className="font-display font-700 text-forest-600">Total</span>
              <span className="font-display font-900 text-2xl text-forest-700">
                ${subtotal}
              </span>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={buildWhatsAppMessage}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bb5a] text-white py-4 rounded-3xl font-display font-900 text-base transition-all hover:scale-[1.02] shadow-lg shadow-green-500/30 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Confirmar por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}