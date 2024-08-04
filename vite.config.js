import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const apiUrl = env.VITE_BACKEND_URL || 'http://localhost:8080';
  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiUrl,
          changeOrigin: true, // 프록시 요청의 호스트 헤더를 백엔드 서버의 도메인으로 변경
        },
      },
    },
    build: {
      outDir: './build',
    },
  });
};
/*
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
*/
