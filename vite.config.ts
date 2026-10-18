import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react/jsx-runtime',
      '@tanstack/react-query',
      'wagmi',
      'wagmi/chains',
      'wagmi/connectors',
      'viem',
      'viem/chains',
      'connectkit',
      'framer-motion',
      'lucide-react',
      'sonner',
      'clsx',
      'tailwind-merge',
      'vite-plugin-node-polyfills/shims/buffer',
      'vite-plugin-node-polyfills/shims/global',
      'vite-plugin-node-polyfills/shims/process',
    ],
  },
  build: {
    chunkSizeWarningLimit: 3000,
    // Use esbuild minifier — much lower peak memory than Rollup's terser
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Coarse split: one chunk per logical group keeps Rollup's graph small
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('@privy-io')) return 'privy'
          if (id.includes('@walletconnect')) return 'wc'
          if (id.includes('wagmi') || id.includes('@wagmi')) return 'wagmi'
          if (id.includes('viem') || id.includes('/ox/') || id.includes('porto')) return 'viem'
          if (id.includes('@tanstack')) return 'query'
          return 'vendor'
        },
      },
    },
  },
  server: {
    allowedHosts: true,
    cors: true,
  },
})
