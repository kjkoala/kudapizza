import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  server: {
    strictPort: true,
    host: true,
    open: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:8000/',
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  publicDir: "src/assets",
});
