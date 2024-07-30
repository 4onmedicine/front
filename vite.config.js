import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiUrl = process.env.VITE_BACKEND_URL || 'http://localhost:8080';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {
        target: apiUrl,
        changeOrigin: true, // 프록시 요청의 호스트 헤더를 백엔드 서버의 도메인으로 변경
      },
    },
  },
});
