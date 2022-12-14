/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		typography: theme => ({}),
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
