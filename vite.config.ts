import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// export default {
//   server: {
//     historyApiFallback: true,
//   },
// };



// vite.config.js
export default defineConfig({
  base: '/textUtils-example-project/',
  plugins: [react()],
});