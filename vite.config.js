import { defineConfig } from 'vite' // Importa la función para definir la configuración de Vite
import react from '@vitejs/plugin-react' // Importa el plugin oficial de React para Vite
import path from 'path' // Importa el módulo 'path' de Node.js para manejar rutas de archivos

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Configura el servidor de desarrollo para que use el puerto 3000
  },
  plugins: [react()], // Agrega el plugin de React para habilitar características como Fast Refresh
  esbuild: {
    loader: 'jsx', // Configura 'esbuild' para procesar archivos como JSX
    include: /.*\.jsx?$/, // Incluye archivos con extensiones .js y .jsx
    exclude: [], // No excluye ningún archivo explícitamente
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // Trata los archivos .js como JSX durante la optimización de dependencias
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define un alias '@' que apunta a la carpeta 'src'
    },
  },
})
