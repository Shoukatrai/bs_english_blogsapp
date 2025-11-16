/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      pastel: {
        bg: "#faf7f5",
        card: "#ffffff",
        text: "#2c2c2c",
        primary: "#ff7e6b",
        secondary: "#6c63ff",
      },
    },
    boxShadow: {
      soft: "0 4px 15px rgba(0,0,0,0.06)",
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
  },
};
export const plugins = [];
