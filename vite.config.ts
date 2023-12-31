import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode, ssrBuild }) => {
  // Load env file based on `mode` in the current working directory.

  const env = loadEnv(mode, process.cwd(), "");

  return {
    // dev specific config
    plugins: [react()],
    base: "./",
    define: {
      BASENAME: JSON.stringify(command === "serve" ? "/" : "/CashOperations"),
    },
  };
});
