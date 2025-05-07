import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        slate: {
          50: "hsl(220, 16%, 96%)",
          100: "hsl(215, 16%, 93%)",
          200: "hsl(214, 15%, 88%)",
          300: "hsl(213, 16%, 83%)",
          400: "hsl(212, 17%, 62%)",
          500: "hsl(212, 17%, 45%)",
          600: "hsl(213, 18%, 36%)",
          700: "hsl(217, 19%, 27%)",
          800: "hsl(218, 23%, 23%)",
          900: "hsl(220, 26%, 18%)",
          950: "hsl(222, 47%, 11%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "var(--font-plex-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["var(--font-plex-serif)", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        mono: [
          "var(--font-plex-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: "normal",
              letterSpacing: "0.025em",
              fontFamily: "var(--font-plex-serif), ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
            },
            p: {
              fontFamily:
                "var(--font-plex-sans), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
            },
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
}

export default config
