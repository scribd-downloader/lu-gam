import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [
    Pages(),
    Sitemap({
      hostname: 'https://ludoking.pro', // Your website URL
      routes: async () => {
        return [
          '/',
          '/about-us',
          '/privacy-policy',
          '/terms-of-service',
          '/contact-us',
          // Add other static routes if needed
        ];
      },
    }),
  ],
});
