import { execSync } from "node:child_process";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import { nodePolyfills } from "vite-plugin-node-polyfills";

let hash = "";

try {
  hash = execSync("git rev-parse --short HEAD").toString().trim();
} catch (error) {
  hash = "DEVELOPMENT";
}

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    EnvironmentPlugin({
      COMMIT_HASH: hash,
    }),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   devOptions: {
    //     enabled: true
    //   }
    // })
  ],
  build: {
    target: "esnext",
    assetsDir: "",
    rollupOptions: {
      plugins: [visualizer()],
    },
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./src"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@components": resolve(__dirname, "./src/components"),
      "@core": resolve(__dirname, "./src/core"),
      "@layouts": resolve(__dirname, "./src/layouts"),
    },
  },
});
