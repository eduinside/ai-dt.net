// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-dt.net',
  integrations: [mdx(), sitemap()],
  devToolbar: { enabled: false },
  // 원본 /index(안내 허브) = 홈. 지원센터 메뉴 진입점 및 외부 구 링크가 404 나지 않도록 홈으로 정적 리다이렉트.
  redirects: {
    '/index': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
