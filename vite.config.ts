import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import { cwd } from 'process';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: './public',
  resolve: {
    alias: { '/src': resolve(cwd(), 'src') },
  },
});
