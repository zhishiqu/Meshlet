import { defineConfig } from 'vite';
export default defineConfig({server:{port:3006,strictPort:true,host:'127.0.0.1',headers:{'Cross-Origin-Opener-Policy':'same-origin','Cross-Origin-Embedder-Policy':'require-corp'}},build:{rolldownOptions:{input:{terrain:'index.html',alias:'terrain.html',waterTest:'water-test.html'}}}});
