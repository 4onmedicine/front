// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// API 서버 주소를 환경 변수에서 가져옴
const apiUrl = process.env.VITE_API_URL || 'http://localhost:8080';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: apiUrl, // 실제 API 서버 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "build", // 빌드 결과물이 저장될 디렉토리 설정
  },
});
