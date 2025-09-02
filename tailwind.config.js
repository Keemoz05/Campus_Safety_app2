/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",   // ✅ scans all files inside app & subfolders
    "./components/**/*.{js,jsx,ts,tsx}", // ✅ scans all files inside components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
