import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "error-container": "#ffdad6",
        "surface-container-highest": "#d3e4fe",
        "on-secondary-fixed": "#241a00",
        "error": "#ba1a1a",
        "outline-variant": "#c3c6d2",
        "on-primary-container": "#80a7ed",
        "on-tertiary-fixed-variant": "#40484e",
        "surface": "#fcfdff",
        "on-surface": "#0b1c30",
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#eaf1ff",
        "secondary-fixed-dim": "#e6c364",
        "on-primary-fixed": "#001b3e",
        "surface-container-low": "#f4f8ff",
        "surface-container-high": "#dce9ff",
        "on-primary": "#ffffff",
        "surface-tint": "#345e9f",
        "primary": "#002652",
        "surface-dim": "#cbdbf5",
        "primary-fixed-dim": "#aac7ff",
        "on-secondary-container": "#785d00",
        "on-error": "#ffffff",
        "secondary": "#755b00",
        "on-background": "#0b1c30",
        "inverse-surface": "#213145",
        "background": "#fcfdff",
        "outline": "#94a3b8",
        "surface-container": "#eef4ff",
        "primary-fixed": "#d6e3ff",
        "on-tertiary-fixed": "#151c22",
        "secondary-fixed": "#ffe08f",
        "tertiary-fixed": "#dce3eb",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#154685",
        "surface-bright": "#fcfdff",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed-dim": "#c0c7cf",
        "secondary-container": "#fed977",
        "tertiary-container": "#363d43",
        "on-tertiary-container": "#a0a8af",
        "on-secondary-fixed-variant": "#584400",
        "primary-container": "#003b7a",
        "surface-variant": "#d3e4fe",
        "on-tertiary": "#ffffff",
        "on-surface-variant": "#475569",
        "tertiary": "#20272d",
        "inverse-primary": "#aac7ff"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "1rem",
        "full": "9999px"
      },
      "spacing": {
        "stack-sm": "16px",
        "stack-lg": "80px",
        "margin-mobile": "20px",
        "margin-desktop": "80px",
        "gutter": "32px",
        "container-max": "1200px",
        "unit": "8px"
      },
      "fontFamily": {
        "body-md": ["Public Sans", "sans-serif"],
        "label-md": ["Public Sans", "sans-serif"],
        "display-lg": ["Source Serif 4", "serif"],
        "headline-md": ["Source Serif 4", "serif"],
        "display-lg-mobile": ["Source Serif 4", "serif"],
        "body-lg": ["Public Sans", "sans-serif"],
        "headline-lg": ["Source Serif 4", "serif"],
        "headline-lg-mobile": ["Source Serif 4", "serif"]
      },
      "fontSize": {
        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600"}],
        "display-lg": ["52px", {"lineHeight": "60px", "letterSpacing": "-0.03em", "fontWeight": "700"}],
        "headline-md": ["26px", {"lineHeight": "34px", "fontWeight": "600"}],
        "display-lg-mobile": ["36px", {"lineHeight": "44px", "fontWeight": "700"}],
        "body-lg": ["19px", {"lineHeight": "30px", "fontWeight": "400"}],
        "headline-lg": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
        "headline-lg-mobile": ["26px", {"lineHeight": "32px", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    containerQueries,
    forms,
  ],
}
