module.exports = {
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx}',
		'app/**/*.{ts,tsx}',
		'components/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				// Main font families
				gilroy: 'var(--font-gilroy)',
				morganite: 'var(--font-morganite)',
				'open-sans': 'var(--font-open-sans)',
				inter: 'var(--font-inter)',

				// Navigation specific fonts
				'nav-menu': 'var(--TVG-nav-menu-font)',
				'nav-button': 'var(--TVG-nav-button-font)',

				// Component-specific fonts (existing from your design system)
				'TVG-typography-button': 'var(--TVG-typography-button-font-family)',
				'TVG-typography-button-lowercase':
					'var(--TVG-typography-button-lowercase-font-family)',
				'TVG-typography-counter-number':
					'var(--TVG-typography-counter-number-font-family)',
				'TVG-typography-counter-text':
					'var(--TVG-typography-counter-text-font-family)',
				'TVG-typography-default': 'var(--TVG-typography-default-font-family)',
				'TVG-typography-footer-default':
					'var(--TVG-typography-footer-default-font-family)',
				'TVG-typography-footer-menu':
					'var(--TVG-typography-footer-menu-font-family)',
				'TVG-typography-footer-title':
					'var(--TVG-typography-footer-title-font-family)',
				'TVG-typography-form-label':
					'var(--TVG-typography-form-label-font-family)',
				'TVG-typography-h1': 'var(--TVG-typography-h1-font-family)',
				'TVG-typography-h2': 'var(--TVG-typography-h2-font-family)',
				'TVG-typography-h3': 'var(--TVG-typography-h3-font-family)',
				'TVG-typography-h4': 'var(--TVG-typography-h4-font-family)',
				'TVG-typography-h5': 'var(--TVG-typography-h5-font-family)',
				'TVG-typography-h6': 'var(--TVG-typography-h6-font-family)',
				'TVG-typography-hero-text':
					'var(--TVG-typography-hero-text-font-family)',
				'TVG-typography-hero-title':
					'var(--TVG-typography-hero-title-font-family)',
				'TVG-typography-hero-title2':
					'var(--TVG-typography-hero-title2-font-family)',
				'TVG-typography-counter-symbol':
					'var(--TVG-typography-counter-symbol-font-family)',
				'TVG-typography-side-menu-item':
					'var(--TVG-typography-side-menu-item-font-family)',
				'TVG-typography-tagline': 'var(--TVG-typography-tagline-font-family)',
				'TVG-typography-TVG-typography-TVG-typography-top-menu-item':
					'var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-family)',
				sans: [
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
		container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
	},
	plugins: [],
	darkMode: ['class'],
};
