import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import { cwd } from 'process';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: './public',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: { '/src': resolve(cwd(), 'src') },
  },
});
