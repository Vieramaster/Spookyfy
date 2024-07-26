/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-base": "#121212",
        "background-highlight": "#1f1f1f",
        "background-tinted-base": "hsla(0,0%,100%,.1)",
        "background-tinted-highlight": "hsla(0,0%,100%,.14)",
        "background-tinted-press": "hsla(0,0%,100%,.05)",
        "text-base": "#fff",
        "text-sub": "#b3b3b3",
      },
    },
  },
  plugins: [],
};
