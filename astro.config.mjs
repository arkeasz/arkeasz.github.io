// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

export default defineConfig({
    site: 'https://arkirus.fun',
    integrations: [mdx(), sitemap(), vue()],
});