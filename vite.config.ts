import path from 'path';
import { defineConfig } from 'vite';
import { vitePluginFakeServer } from 'vite-plugin-fake-server';

import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'projects-dashboard.js',
        assetFileNames: assetInfo => {
          if (assetInfo.names.includes('index.css')) {
            return 'projects-dashboard.css';
          }

          return '[name].[ext]';
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react(), tailwindcss(), vitePluginFakeServer()]
});
