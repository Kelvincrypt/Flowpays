/**
 * Bun-native build script — replaces Vite/Rollup for production bundle.
 * Uses Bun.build() which streams the dependency graph and uses far less
 * peak memory than Rollup (which holds the entire graph in one pass).
 */
import { existsSync, mkdirSync, cpSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const OUT  = join(ROOT, 'dist')

// Clean dist
if (existsSync(OUT)) { const { rmSync } = await import('fs'); rmSync(OUT, { recursive: true }) }
mkdirSync(OUT, { recursive: true })

// Copy public/ assets (index.html, favicon, etc.)
const PUBLIC = join(ROOT, 'public')
if (existsSync(PUBLIC)) cpSync(PUBLIC, OUT, { recursive: true })

// Copy index.html and patch the entry script tag
let html = readFileSync(join(ROOT, 'index.html'), 'utf8')

console.log('Bundling with Bun.build()…')
const result = await Bun.build({
  entrypoints: [join(ROOT, 'src/main.tsx')],
  outdir: join(OUT, 'assets'),
  target: 'browser',
  format: 'esm',
  splitting: true,       // code-split at dynamic import() boundaries
  minify: true,
  sourcemap: 'none',
  define: {
    'process.env.NODE_ENV': '"production"',
    'import.meta.env.MODE': '"production"',
    'import.meta.env.PROD': 'true',
    'import.meta.env.DEV': 'false',
    'import.meta.env.SSR': 'false',
    'import.meta.env.VITE_PRIVY_APP_ID': JSON.stringify(process.env.VITE_PRIVY_APP_ID ?? 'cmuyft2e4004x0clc2yh4kwtq'),
  },
  loader: {
    '.svg': 'text',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.woff2': 'dataurl',
    '.woff': 'dataurl',
  },
  // Node polyfills Vite's plugin-node-polyfills provides
  external: [],
})

if (!result.success) {
  console.error('Build failed:')
  for (const msg of result.logs) console.error(msg)
  process.exit(1)
}

// Patch index.html — replace <script type="module" src="/src/main.tsx">
// with the hashed output file
const mainOutput = result.outputs.find(o => o.path.includes('main') || o.kind === 'entry-point')
const scriptSrc = mainOutput ? `/assets/${mainOutput.path.split('/').pop()}` : '/assets/main.js'

html = html
  .replace(/<script\s+type="module"\s+src="[^"]*main\.tsx"[^>]*><\/script>/,
    `<script type="module" src="${scriptSrc}"></script>`)
  .replace(/<script\s+type="module"\s+src="[^"]*main\.tsx"[^>]*\/>/, '')

writeFileSync(join(OUT, 'index.html'), html)

console.log(`✓ Build complete → dist/ (${result.outputs.length} chunks)`)
for (const o of result.outputs) {
  const size = (o.size / 1024).toFixed(1)
  console.log(`  ${o.path.split('/').pop()?.padEnd(48)} ${size} KB`)
}
