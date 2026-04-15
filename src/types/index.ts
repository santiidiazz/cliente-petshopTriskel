// src/types/index.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  petType: string;
  price: number;
  emoji: string;
  description: string;
  unit: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethod = 'efectivo' | 'debito';

export interface OrderForm {
  paymentMethod: PaymentMethod;
  address: string;
}