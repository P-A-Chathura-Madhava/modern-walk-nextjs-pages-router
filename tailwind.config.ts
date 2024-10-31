import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Custom content
        icon: "9",
        btn: "8",
        "input-field": "8",
      },
      fontFamily: {
        // Custom Font
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Custom color classes
        "custom-primary": {
          "custom-normal": "#EB8120",
          "custom-hover": "#F17502",
          "custom-selected": "#D16400",
          "custom-inverse-hover": "#F7CDA6",
          "custom-inverse-hover-click": "#EBB888",
        },
        "custom-main": "rgb(204, 209, 218)",
        "custom-borderColor": {
          "custom-active": "#7C89A1",
          "custom-inactive": "#C6CBD5",
        },
        "custom-background": {
          "elephant-grey": "#F7F8F9",
          "elephant-contrast": "#F0F2F5",
          white: "#FFFFFF",
        },
        "custom-link": {
          blue: "#6A81FD",
          hover: "#5467CE",
          active: "#4054C1",
          disabled: "#A5B0E3",
        },
        "custom-danger": {
          red: "#E1273D",
          glow: "#ED9AA4",
          inactive: "#F0939E",
          disabled: "#F9D4D8",
          hover: "#C01227",
          active: "#9D0215",
        },
        "custom-normal": "#F7F8F9",
        "custom-hover": "#F7F8F9",
        "custom-selected": "#F7F8F9",
      },
      height: {
        "icon-h-normal": "32",
        "icon-h-big": "48",
        "btn-normal": "48",
        "table-sort": "28",
        "input-field": "48",
      },
      width: {
        "icon-w-normal": "32",
        "icon-w-big": "48",
        "btn-normal": "119",
        "table-sort": "18",
        "input-field": "416",
      },
      boxShadow: {
        "3xl": "6px 10px 21px -6px rgba(0,0,0,0.75)",
        "4xl": "15px 18px 26px 0px rgba(0,0,0,0.75)",
      },
      fontSize: {
        "icon-md": "18",
        "icon-big": "48",
        btn: "16",
        "input-label": "14",
        "input-field-msg": "14",
      },
      fontWeight: {
        "icon-md": "400",
        btn: "700",
        "input-label": "400",
        "input-field-msg": "400",
      },
      padding: {
        "icon-y": "7",
        "icon-x": "8",
        "btn-t": "14",
        "btn-b": "10",
        "btn-x": "24",
        "input-t": "18",
        "input-b": "8",
        "input-l": "12",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
