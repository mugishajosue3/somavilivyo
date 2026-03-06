import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '320px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			// Device-specific breakpoints
			'mobile-s': '320px',
			'mobile-m': '375px',
			'mobile-l': '425px',
			'tablet': '768px',
			'laptop': '1024px',
			'laptop-l': '1440px',
			'desktop': '2560px',
		},
		extend: {
		fontFamily: {
			'satoshi': ['DM Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'], // Tesla geometric
			'nunito': ['Nunito', 'system-ui', '-apple-system', 'sans-serif'], // Duolingo rounded
			'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			'jakarta': ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
		},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
				'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
				'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
				'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
					'gradient-start': 'hsl(var(--sidebar-gradient-start))',
					'gradient-middle': 'hsl(var(--sidebar-gradient-middle))',
					'gradient-end': 'hsl(var(--sidebar-gradient-end))',
				},
				'purple': {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7c3aed',
					800: '#6b21a8',
					900: '#581c87',
				},
				'indigo': {
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
				},
				'pink': {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843'
				},
			},
			backgroundImage: {
				'sidebar-gradient': 'linear-gradient(180deg, var(--sidebar-gradient-start) 0%, var(--sidebar-gradient-middle) 50%, var(--sidebar-gradient-end) 100%)',
				'sidebar-item-active-gradient': 'linear-gradient(90deg, hsl(var(--sidebar-accent) / 0.15), hsl(var(--sidebar-accent) / 0.25))',
				'sidebar-item-hover-gradient': 'linear-gradient(90deg, hsl(var(--sidebar-accent) / 0.08), hsl(var(--sidebar-accent) / 0.15))',
				'text-gradient-emerald': 'linear-gradient(90deg, #00A676, #059669)',
				'text-gradient-gamified': 'linear-gradient(90deg, #A9FF68, #00A676)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)',
			},
			boxShadow: {
				'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05)',
				'medium': '0 4px 16px -4px rgba(0, 0, 0, 0.08)',
				'large': '0 8px 32px -8px rgba(0, 0, 0, 0.12)',
				'glow': '0 0 20px rgba(0, 166, 118, 0.3)',
				'glow-hover': '0 0 30px rgba(0, 166, 118, 0.5)',
				'glow-lg': '0 0 40px rgba(0, 166, 118, 0.6)',
				'card-hover': '0 12px 40px -10px rgba(0, 0, 0, 0.15)',
				'sidebar-card': '0 4px 16px -4px rgba(0, 0, 0, 0.08)',
				'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.03)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow-sidebar': {
					'0%, 100%': { boxShadow: '0 0 8px hsl(var(--sidebar-accent-foreground) / 0.3)', opacity: '0.9' },
					'50%': { boxShadow: '0 0 16px hsl(var(--sidebar-accent-foreground) / 0.6)', opacity: '1' },
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 166, 118, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(0, 166, 118, 0.6)'
					}
				},
				'spring-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'50%': {
						transform: 'scale(1.02)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'sidebar-item-appear': {
					'0%': { opacity: '0', transform: 'translateX(-10px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'magnetic-hover-sm': {
					'0%': { transform: 'translateY(0) scale(1)' },
					'50%': { transform: 'translateY(-1px) scale(1.02)' },
					'100%': { transform: 'translateY(0) scale(1)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'spring-in': 'spring-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'slide-up': 'slide-up 0.4s ease-out forwards',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow-sidebar': 'pulse-glow-sidebar 2.5s infinite ease-in-out',
				'pulse-glow': 'pulse-glow 2.5s infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'sidebar-item-appear': 'sidebar-item-appear 0.3s ease-out forwards var(--stagger-delay, 0s)',
				'magnetic-hover-sm': 'magnetic-hover-sm 0.3s ease-out',
			},
			backdropBlur: {
				'glass': '12px',
			},
			transitionTimingFunction: {
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			transitionDelay: {
				'100': '100ms',
				'150': '150ms',
				'200': '200ms',
				'250': '250ms',
				'300': '300ms',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }: { addUtilities: Function }) {
			addUtilities({
				'.text-gradient-purple-pink': {
					'@apply bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent': {},
				},
				'.glass-sidebar': {
					'@apply bg-clip-padding backdrop-filter backdrop-blur-glass bg-opacity-30 border border-[hsl(var(--sidebar-border)/0.2)] shadow-sidebar-card': {},
					backgroundColor: 'hsl(var(--sidebar-gradient-middle)/0.1)',
				},
				'.stagger-children': {
					'& > *': {
						'--stagger-delay': 'calc(var(--stagger-index, 0) * 75ms)',
						animation: 'sidebar-item-appear 0.4s ease-out forwards var(--stagger-delay)',
					},
				},
			});
		},
	],
} satisfies Config;
