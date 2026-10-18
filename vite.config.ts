import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative so the site works from
// https://<user>.github.io/<repo>/ and from a custom domain alike.
export default defineConfig({
  plugins: [react()],
  base: './',
});
