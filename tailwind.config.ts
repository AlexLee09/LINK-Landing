const {heroui} = require("@heroui/react");

import type { Config } from "tailwindcss"

const config = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
    prefix: "",
    theme: {
        extend: {},
    },
    plugins: [heroui()],
    darkMode: "class",
} satisfies Config

export default config