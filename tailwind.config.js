/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    keyframes: {
      'bottom-to-top': {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
    animation: {
      'bottom-to-top': 'bottom-to-top 1s ease-out forwards',
    },
    colors: {
      customGray: '#f4f4f4',
    },
  },
  
};
export const plugins = [];
