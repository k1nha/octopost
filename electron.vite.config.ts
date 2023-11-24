/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/setupTests.js'],
      include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
      css: {
        modules: {
          classNameStrategy: 'non-scoped'
        }
      }
    }
  }
})
