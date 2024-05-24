/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueviolet: "#9747ff",
        "surface-surface1": "#fff",
        "text-primary": "#091e42",
        "text-tertiary": "rgba(85, 87, 112, 0.5)",
        "background-light-green": "#f5fff9",
        "feedback-positive": "#0ead1e",
        "background-light-red": "#fff2f4",
        "feedback-negative": "#e30000",
        "color-tokens-surface-bg-1": "#f5f6f7",
        "color-tokens-text-secondary": "#555770",
        "background-light-blue": "#e9efff",
        black: "#000",
        royalblue: "#616ada",
      },
      spacing: {
        "spacing-2": "8px",
        "spacing-3": "12px",
        "spacing-1": "4px",
      },
      fontFamily: {
        "xxxl-semibold": "Inter",
        "avenir-next-lt-pro": "'Avenir Next LT Pro'",
      },
      borderRadius: {
        "8xs": "5px",
        "981xl": "1000px",
        "9980xl": "9999px",
        "81xl": "100px",
        "12xs": "1px",
        "spacing-2": "8px",
        "spacing-4": "16px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      xl: "20px",
      "3xs": "10px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
