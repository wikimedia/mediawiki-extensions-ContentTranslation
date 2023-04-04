import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
const packageDef = require("./package.json");
import path from "path";
import fs from "fs";

let localConfig = {};

if (fs.existsSync("./vite.config.local.js")) {
  localConfig = require("./vite.config.local.js");
} else {
  console.warn("Could not find vite.config.local.js. Using default values");
}

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 3,
          },
        },
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: /~(.+)/,
        replacement: path.join(process.cwd(), "node_modules/$1"),
      },
    ],
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false,
    emptyOutDir: false,
    target: "es2015",
    lib: {
      entry: path.resolve(__dirname, "./src/main.js"),
      name: packageDef.name,
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        // Default extension is mjs
        entryFileNames: `${packageDef.name}.es.js`,
      },
    },
  },
  esbuild: {
    // Avoid ResourceLoader minification
    banner: "/*@nomin*/",
  },
  define: {
    // Vite had stopped exporting process
    // https://github.com/vitejs/vite/commit/8ad7ecd1029bdc0b47e55877db10ac630829c7e5
    "process.env": {},
  },
  ...localConfig,
});