import Forms from "@tailwindcss/forms"
import Typography from "@tailwindcss/typography"
import TwScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import TwAnimate from "tailwindcss-animate"
import plugin from "tailwindcss/plugin"
import { ClurProperties } from "./plugins/@clur-properties"
import { ContainerGrid } from "./plugins/@container-grid"
import { MyPlugin } from "./plugins/@my-plugin"

const colors = {
  //? neutral colors
  "neutral-white": "rgb(var(--neutral-white),<alpha-value>)",
  "neutral-black": "rgb(var(--neutral-black),<alpha-value>)",
  //? main colors
  primary: {
    DEFAULT: "rgb(var(--primary),<alpha-value>)",
    active: "rgb(var(--primary-active),<alpha-value>)",
    accent: "rgb(var(--primary-accent),<alpha-value>)",
    text: "rgb(var(--primary-text),<alpha-value>)",
    hover: "rgb(var(--primary-hover),<alpha-value>)",
  },
  secondary: {
    DEFAULT: "rgb(var(--secondary),<alpha-value>)",
    active: "rgb(var(--secondary-active),<alpha-value>)",
    accent: "rgb(var(--secondary-accent),<alpha-value>)",
    text: "rgb(var(--secondary-text),<alpha-value>)",
    hover: "rgb(var(--secondary-hover),<alpha-value>)",
  },
  //? actions colors
  alert: {
    DEFAULT: "rgb(var(--alert),<alpha-value>)",
    text: "rgb(var(--alert-text),<alpha-value>)",
  },
  success: {
    DEFAULT: "rgb(var(--success),<alpha-value>)",
    text: "rgb(var(--success-text),<alpha-value>)",
  },
  warn: {
    DEFAULT: "rgb(var(--warn),<alpha-value>)",
    text: "rgb(var(--warn-text),<alpha-value>)",
  },
  info: {
    DEFAULT: "rgb(var(--info),<alpha-value>)",
    text: "rgb(var(--info-text),<alpha-value>)",
  },
}
const config = {
  darkMode: ["class"],
  content: [],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    Forms({ strategy: "class" }),
    ClurProperties,
    Typography,
    TwAnimate,
    TwScrollbar,
    ContainerGrid,
    MyPlugin,
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--primary": "105,241,221",
          "--primary-active": "105,241,221",
          "--primary-accent": "58,207,201",
          "--primary-text": "3,37,32",
          "--primary-hover": "20,224,194",
          "--secondary": "121,58,237",
          "--secondary-active": "153,105,241",
          "--secondary-accent": "121,68,207",
          "--secondary-text": "255,255,255",
          "--secondary-hover": "92,20,224",
          "--alert": "237,58,58",
          "--alert-text": "255,255,255",
          "--success": "58,237,58",
          "--success-text": "3,37,3",
          "--warn": "237,237,58",
          "--warn-text": "37,37,3",
          "--info": "17,137,218",
          "--info-text": "227,237,223",
          "--neutral-white": "251,251,251",
          "--neutral-black": "35,41,40",
        },
        ".dark": {
          "--primary": "0, 0, 255",
          "--primary-active": "0, 0, 200",
          "--primary-accent": "0, 0, 150",
          "--primary-text": "255,255,255",
          "--primary-hover": "0, 0, 100",
          "--secondary": "92,20,224",
          "--secondary-active": "70,10,200",
          "--secondary-accent": "50,0,150",
          "--secondary-text": "255,255,255",
          "--secondary-hover": "30,0,100",
          "--alert": "200,0,0",
          "--alert-text": "255,255,255",
          "--success": "0,200,0",
          "--success-text": "0,100,0",
          "--warn": "200,200,0",
          "--warn-text": "100,100,0",
          "--info": "0,100,200",
          "--info-text": "200,200,200",
          "--neutral-white": "251,251,251",
          "--neutral-black": "35,41,40",
        },
      })
    }),
  ],
} satisfies Config
export default config
