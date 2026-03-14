import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-variant': 'var(--color-primary-variant)',
        secondary: 'var(--color-secondary)',
        'secondary-variant': 'var(--color-secondary-variant)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'light-section': 'var(--color-light-section)',
        error: 'var(--color-error)',
        'text-main': 'var(--text-main)',
        'text-on-dark': 'var(--text-on-dark)'
      },

      fontSize: {
        '8xl': ['8rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      }
    },
  },
  plugins: [],
}