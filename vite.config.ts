import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			assets: path.resolve(__dirname, "src/assets"),
			components: path.resolve(__dirname, "src/components"),
			screens: path.resolve(__dirname, "src/screens"),
			services: path.resolve(__dirname, "src/services"),
			styles: path.resolve(__dirname, "src/styles"),
			types: path.resolve(__dirname, "src/types"),
		},
	},
});
