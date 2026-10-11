export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { obsidian: '#07090D', charcoal: '#111722', electric: '#078BFF', ice: '#61C7FF', steel: '#8996A8', clean: '#F7FAFF' },
      fontFamily: { display: ['"Space Grotesk"', 'system-ui', 'sans-serif'], body: ['Inter', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
}
