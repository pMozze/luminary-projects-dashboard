import path from 'path';
import { defineConfig } from 'vite';
import { vitePluginFakeServer } from 'vite-plugin-fake-server';

import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react(), tailwindcss(), vitePluginFakeServer()]
});
