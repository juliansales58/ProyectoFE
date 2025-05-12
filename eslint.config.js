import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactPlugin from 'eslint-plugin-react'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest', // Habilita la versión más reciente de ECMAScript (JavaScript moderno)
      sourceType: 'module', // Indica que el código usa módulos ES6 (import/export)
      globals: {
        // Variables globales de Node.js
        __dirname: 'readonly', // Ruta del directorio actual
        __filename: 'readonly', // Ruta completa del archivo actual
        _: 'readonly', // Variable global de lodash (si está disponible)
        exports: 'readonly', // Objeto para exportar módulos en Node.js
        module: 'readonly', // Representa el módulo actual en Node.js
        require: 'readonly', // Función para importar módulos en Node.js
        process: 'readonly', // Información del proceso en ejecución (Node.js)
        console: 'readonly', // Objeto para imprimir mensajes en la consola

        // Variables globales del navegador
        fetch: 'readonly', // API para realizar solicitudes HTTP
        document: 'readonly', // Representa el DOM del documento HTML
        window: 'readonly', // Objeto global que representa la ventana del navegador
        sessionStorage: 'readonly', // Almacenamiento de sesión del navegador
        setTimeout: 'readonly', // Temporizador para ejecutar código después de un retraso
        URLSearchParams: 'readonly', // API para trabajar con parámetros de consulta en URLs
        Blob: 'readonly', // Representa datos binarios en el navegador
        FormData: 'readonly', // API para construir datos de formularios
        URL: 'readonly', // API para trabajar con URLs
        clearTimeout: 'readonly', // Cancela un temporizador configurado con setTimeout
        crypto: 'readonly', // API para operaciones criptográficas
        FileReader: 'readonly', // API para leer archivos en el navegador
        alert: 'readonly', // Muestra un cuadro de alerta en el navegador
        hasOwnProperty: 'readonly', // Método para verificar propiedades de un objeto
        navigator: 'readonly', // Información sobre el navegador y el dispositivo
        localStorage: 'readonly', // Almacenamiento local del navegador

        // Variables globales adicionales
        Buffer: 'readonly', // Manejo de datos binarios en Node.js
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off', // Desactiva la verificación de prop-types
      'react/react-in-jsx-scope': 'off', // Desactiva la necesidad de importar React en archivos JSX
      'no-useless-catch': 'off', // Desactiva la regla no-useless-catch
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
]
