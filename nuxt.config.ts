// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-11-01',
    eslint: {
        checker: true,
        config: {
            nuxt: {
                sortConfigKeys: true,
            },
        },
    },
});
