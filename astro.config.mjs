// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://arkeasz.github.io',
  base: '/',
  integrations: [react(), svelte()]
});
