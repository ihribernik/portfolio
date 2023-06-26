import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      base: "",
      plugins: [react(), svgr()],
    };
  } else {
    return {
      base: "/portfolio/",
      plugins: [react(), svgr()],
    };
  }
})
