import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,webp,png,mp4}'],
        maximumFileSizeToCacheInBytes: 200000000
      },
      manifest: {
        name: 'DMNT Creative Agency',
        short_name: 'DMNT',
        description: 'DMNT Creative Agency, ¡Ideas fuera de este mundo!',
        theme_color: '#5a0891',
        categories: ["web", "design"],
        dir: "ltr",
        display_override: ["standalone", "fullscreen"],
        display: "standalone",
        lang: "es",
        orientation: "portrait",
        prefer_related_application: false,
        icons: [
          {
            src: "icon64x64.webp",
            type: "image/webp",
            sizes: "64x64",
            purpose: 'any'
          },
          {
            src: "icon180x180.webp",
            type: "image/webp",
            sizes: "180x180",
            purpose: 'any'
          },
          {
            src: "icon192x192.webp",
            type: "image/webp",
            sizes: "192x192",
            purpose: 'any'
          },
          {
            src: "icon512x512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: 'any'
          },
          {
            src: "icon512x512.webp",
            type: "image/webp",
            sizes: "512x512",
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})
