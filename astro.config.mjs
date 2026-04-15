import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true, // Esto es clave para que resetee los estilos feos
    }), 
    react()
  ],
});