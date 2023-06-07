import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/client',
  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
});
