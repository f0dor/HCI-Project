import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-blue': '#1F3F70',
        'custom-dark-blue': '#0D203F',
        'custom-black': '#020914',
        'nav-font-color': '#86B4FB',
        'nav-hovered-font-color': '#D7E6FF',
        'logo-font-color': '#E3703F',
        'navbar-background-color': '#1831576A',
        'button-white-text': '#458CF9',
      },
  },
  plugins: [],
  }
}
export default config;