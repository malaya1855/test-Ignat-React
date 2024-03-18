import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginSass from "vite-plugin-sass";

export default defineConfig({
  plugins: [react(), vitePluginSass()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
    },
  },
  base: "/test-Ignat-React",
});
