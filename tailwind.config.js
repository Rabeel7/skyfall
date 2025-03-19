/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    sans: ['"PT Sans"', "sans-serif"],
  },
  theme: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    extend: {
      colors: {
        primary: {
          light: "#6B7280", // Light Grayish Blue
          DEFAULT: "#1F2937", // Dark Blue Gray
          dark: "#111827", // Darker Gray
        },
        secondary: {
          light: "#FCD34D", // Soft Yellow
          DEFAULT: "#F59E0B", // Amber
          dark: "#B45309", // Deep Orange
        },
        accent: {
          light: "#93C5FD", // Light Blue
          DEFAULT: "#3B82F6", // Blue
          dark: "#1E40AF", // Dark Blue
        },
        success: {
          light: "#6EE7B7", // Light Green
          DEFAULT: "#10B981", // Green
          dark: "#047857", // Dark Green
        },
        warning: {
          light: "#FDE68A", // Pale Yellow
          DEFAULT: "#FBBF24", // Yellow
          dark: "#B45309", // Deep Orange
        },
        danger: {
          light: "#FCA5A5", // Light Red
          DEFAULT: "#EF4444", // Red
          dark: "#7F1D1D", // Dark Red
        },
        neutral: {
          light: "#F3F4F6", // Light Gray
          DEFAULT: "#6B7280", // Gray
          dark: "#666666", // Dark Gray
        },
        back: {
          DEFAULT: "#F1F4F9",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        dividerColor: {
          DEFAULT: "#EEEEEE",
        },
        bgColors: {
          light: "#DEE7F7",
          DEFAULT: "",
          dark: "",
        },
        purple: {
          DEFAULT: "#41479B",
        },
      },
      fontSize: {
        14: "14px",
        13: "13px",
        10: "10px",
        11: "11px",
        base: "1rem",
        12: "12px",
        18: "18px",
        24: "24px",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
    boxShadow: {
      custom: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
  },
  plugins: [],
};
