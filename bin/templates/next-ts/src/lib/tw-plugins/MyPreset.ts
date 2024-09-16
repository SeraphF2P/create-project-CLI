import forms from "@tailwindcss/forms"
import scrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import ClurProperties from "./clur-properties"
import MyPlugin from "./MyPlugin"

const colors = {
  //? neutral colors
  "neutral-white": "rgb(255,255,255)",
  "neutral-black": "rgb(35,41,40)",
  //? main colors
  primary: {
    DEFAULT: "rgb(189,13,68)",
    active: "rgb(141,10,51)",
    text: "rgb(237,237,237)",
    hover: "rgb(237,16,85)",
  },
  secondary: {
    DEFAULT: "rgb(217,112,99)",
    active: "#cf4a3a",
    text: "#31100c",
    hover: "#e3968c",
  },
  third: {
    DEFAULT: "rgb(131,194,198)",
    active: "rgba(96,177,182)",
    text: "rgba(23,49,51)",
    hover: "rgba(166,211,214)",
  },
  //? actions colors
  alert: {
    DEFAULT: "rgb(237,58,58)",
    text: "rgb(255,255,255)",
  },
  success: {
    DEFAULT: "rgb(58,237,58)",
    text: "rgb(3,37,3)",
  },
  warn: {
    DEFAULT: "rgb(237,237,58)",
    text: "rgb(37,37,3)",
  },
  info: {
    DEFAULT: "rgb(17,137,218)",
    text: "rgb(227,237,223)",
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
  plugins: [MyPlugin, scrollbar, forms, ClurProperties],
} satisfies Config
export default config
