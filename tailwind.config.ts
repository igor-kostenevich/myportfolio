import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			'space-mono': [
  				'Space Mono',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				light: '#3498db',
  				dark: '#1e3a8a'
  			},
  			secondary: {
  				light: '#ccc',
  				dark: '#fafafa'
  			}
  		},
  	}
  },
} satisfies Config