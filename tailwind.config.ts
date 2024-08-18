import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'display-regular': [
          '72px',
          {
            lineHeight: '19.2px',
            letterSpacing: '-0.48px',
            fontWeight: '400',
          }
        ],
        'display-medium': [
          '72px',
          {
            lineHeight: '19.2px',
            letterSpacing: '-0.48px',
            fontWeight: '500',
          }
        ],
        'display-semibold': [
          '72px',
          {
            lineHeight: '19.2px',
            letterSpacing: '-0.48px',
            fontWeight: '600',
          }
        ],
        'display-bold': [
          '72px',
          {
            lineHeight: '19.2px',
            letterSpacing: '-0.48px',
            fontWeight: '700',
          }
        ],
        'H1-regular': [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.48px',
            fontWeight: '400',
          }
        ],
        'H1-medium': [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.48px',
            fontWeight: '500',
          }
        ],
        'H1-semibold': [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.48px',
            fontWeight: '600',
          }
        ],
        'H1-bold': [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.48px',
            fontWeight: '700',
          }
        ],
        'H2-regular': [
          '48px',
          {
            lineHeight: '20px',
            letterSpacing: '-0.48px',
            fontWeight: '400',
          }
        ],
        'H2-medium': [
          '48px',
          {
            lineHeight: '20px',
            letterSpacing: '-0.32px',
            fontWeight: '500',
          }
        ],
        'H2-semibold': [
          '48px',
          {
            lineHeight: '20px',
            letterSpacing: '-0.32px',
            fontWeight: '600',
          }
        ],
        'H2-bold': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-0.32px',
            fontWeight: '700',
          }
        ],
        'H3-regular': [
          '36px',
          {
            lineHeight: '19.552px',
            letterSpacing: '-0.32px',
            fontWeight: '400',
          }
        ],
        'H3-medium': [
          '36px',
          {
            lineHeight: '19.552px',
            letterSpacing: '-0.32px',
            fontWeight: '500',
          }
        ],
        'H3-semibold': [
          '36px',
          {
            lineHeight: '19.552px',
            letterSpacing: '-0.32px',
            fontWeight: '600',
          }
        ],
        'H3-bold': [
          '36px',
          {
            lineHeight: '19.552px',
            letterSpacing: '-0.32px',
            fontWeight: '700',
          }
        ],
        'H4-regular': [
          '30px',
          {
            lineHeight: '20.272px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'H4-medium': [
          '30px',
          {
            lineHeight: '20.272px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'H4-semibold': [
          '30px',
          {
            lineHeight: '20.272px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'H4-bold': [
          '30px',
          {
            lineHeight: '20.272px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
        'H5-regular': [
          '24px',
          {
            lineHeight: '21.328px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'H5-medium': [
          '24px',
          {
            lineHeight: '21.328px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'H5-semibold': [
          '24px',
          {
            lineHeight: '21.328px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'H5-bold': [
          '24px',
          {
            lineHeight: '21.328px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
        'H6-regular': [
          '20px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'H6-medium': [
          '20px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'H6-semibold': [
          '20px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'H6-bold': [
          '20px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
        'text-lg-regular': [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'text-lg-medium': [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'text-lg-semibold': [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'text-lg-bold': [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
        'text-md-regular': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'text-md-medium': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'text-md-semibold': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'text-md-boild': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
        'text-sm-regular': [
          '14px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'text-sm-medium': [
          '14px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'text-sm-semibold': [
          '14px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'text-sm-bold': [
          '14px',
          {
            lineHeight: '22.864px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
        'caption-md-regular': [
          '12px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'caption-md-medium': [
          '12px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'caption-md-semibold': [
          '12px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'caption-md-bold': [
          '12px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
        'caption-sm-regular': [
          '10px',
          {
            lineHeight: '19.2px',
            letterSpacing: '0px',
            fontWeight: '400',
          }
        ],
        'caption-sm-mediun': [
          '10px',
          {
            lineHeight: '19.2px',
            letterSpacing: '0px',
            fontWeight: '500',
          }
        ],
        'caption-sm-semibold': [
          '10px',
          {
            lineHeight: '19.2px',
            letterSpacing: '0px',
            fontWeight: '600',
          }
        ],
        'caption-sm-bold': [
          '10px',
          {
            lineHeight: '19.2px',
            letterSpacing: '0px',
            fontWeight: '700',
          }
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
