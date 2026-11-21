/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nusa: {
          dark: '#061226',      // Deepest Navy (Reference Top)
          navy: '#0B1E3B',      // Primary Navy Card
          elevated: '#112A52',  // Center Elevated Card
          blue: '#1D63FF',      // Bright Blue Accent
          gold: '#F59E0B',      // Warm Gold/Yellow Accent from NUSA Logo
          goldLight: '#FDE68A'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'elevated': '0 25px 50px -12px rgba(4, 12, 28, 0.75)',
        'card': '0 10px 30px -5px rgba(11, 30, 59, 0.08)',
      }
    }
  },
  plugins: [],
};
