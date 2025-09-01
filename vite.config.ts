import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import svgr from 'vite-plugin-svgr';
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
      '@': path.resolve(__dirname, 'src'),
      '@icons': path.resolve(__dirname, 'src/icons')
    }
  },
  plugins: [react(), svgr(), tailwindcss()]
});
