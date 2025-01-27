/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scale: "scale 1s ease-out",
        scale2: "scale2 .9s ease-in-out infinite",
        scale3: "scale3 .9s ease-in-out",
        shake: "shake .9s ease-in-out infinite",
      },
      keyframes: {
        scale: {
          "75%, 100%": { transform: "scale(1.2)" },
        },
        scale2: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        scale3: {
          "0% 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
        shake: {
          "16.65%": { transform: "translate(8px)" },

          "33.3%": { transform: "translate(-6px)" },

          "49.95%": { transform: "translate(4px)" },

          "66.6%": { transform: "translate(-2px)" },

          "83.25%": { transform: "translate(1px)" },

          "100%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
};
