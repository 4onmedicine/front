import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const apiUrl = env.VITE_BACKEND_URL || "http://localhost:8080";
  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/": {
          target: apiUrl,
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: "./build",
    },
  });
};
