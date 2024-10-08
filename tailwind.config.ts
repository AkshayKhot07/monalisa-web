import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      screens: {
        'md-custom-768-1199': {'min': '768px', 'max': '1199px'},
      },


      boxShadow: {
        custom: "inset 0 0 0 0 #FFFFFF",
        "hover-custom": "inset 2560px 0 0 0 #FFFFFF",
      },

      transitionProperty: {
        shadow: "box-shadow",
      },

      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shadowExpand: {
          "0%": { boxShadow: "inset 0 0 0 0 #FFFFFF" },
          "100%": { boxShadow: "inset 2560px 0 0 0 #FFFFFF" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
        fadeIn: "fadeIn 1s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
