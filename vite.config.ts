import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			assets: path.resolve(__dirname,  "src/assets"),
			components: path.resolve(__dirname, "src/components"),
			screens: path.resolve(__dirname, "src/screens"),
			services: path.resolve(__dirname, "src/services"),
			types: path.resolve(__dirname, "src/types"),
		},
	},
});
