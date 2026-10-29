import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Streamlit embeds the built page in a nested route, so use relative assets.
  base: './',
  server: { host: 'localhost', port: 5173 }
});
