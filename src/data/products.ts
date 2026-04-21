import type { Product } from '../types';
import { pb } from '../lib/pocketbase'; // importante este archivo, seria la url del dominio donde esta la web

// aca traemos todos los productos de pocketbase 
const records = await pb.collection('productos').getFullList({
    sort: '-created',
});

// aca mapeo todo el formato porque tienen otro formato de imagenes
// Esto es necesario porque PocketBase guarda las imagenes distinto
export const products: Product[] = records.map((res) => {
    const url = pb.files.getURL(res, res.image);
    console.log("URL de imagen generada:", url); // Esto lo verás en la terminal de VS Code
    
    return {
      id: res.id,
      name: res.name,
      category: res.category,
      petType: res.petType,
      price: res.price,
      emoji: res.emoji || '🐾', // Si no hay emoji, ponemos una huellita
      // Esta línea es LA MAGIA: convierte el nombre del archivo en una URL real
      image: pb.files.getURL(res, res.image), 
      description: res.description,
      unit: res.unit,
    };
});

export const petTypes = ['Todos', 'Perros', 'Gatos', 'Peces', 'Conejos', 'Aves'] as const;
export const categories = ['Todos', 'Alimentos', 'Accesorios', 'Shampoos'] as const;

