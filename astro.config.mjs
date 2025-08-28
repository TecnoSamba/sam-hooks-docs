// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'SamHooks - Docs',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tecnosamba/sam-hooks' }, { icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/@tecnosamba/sam-hooks' }],
        sidebar: [
            {
                label: 'SamHooks',
                autogenerate: { directory: 'guides' }
            },
        ],
        customCss: [
            './src/styles/global.css'
        ]
    }), react()],

    vite: {
        plugins: [tailwindcss()],
    },
});
