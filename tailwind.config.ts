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
  				light: '#05E2BF',
  				dark: '#05E2BF'
  			},
  			secondary: {
  				light: '#161616',
  				dark: '#161616'
  			},
				dark: {
					light: '#1C1C20',
					dark: '#1C1C20'
				},
				gray: {
					500: '#191919',
					250: '#54575E',
					200: '#A0A5A7',
					150: '#CECECF',
					100: '#ECEAE5',
					50: '#EBEBEB',
				},
				red: '#FF0000',
  		},
  	}
  },
}