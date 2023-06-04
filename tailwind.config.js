/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        root: "#EEEEEE",
        auth: "#B4E4FF",
        login: "#85C88A",
        register: "#E7FBBE",
        primary: "#EBD671",
        "app-page": "#FCE9F1",
      },
    },
  },
  plugins: [],
};
