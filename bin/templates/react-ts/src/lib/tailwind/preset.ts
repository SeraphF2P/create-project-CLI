import Forms from "@tailwindcss/forms"
import Typography from "@tailwindcss/typography"
import TwScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import TwAnimate from "tailwindcss-animate"
import { ClurProperties } from "./plugins/@clur-properties"
import { ContainerGrid } from "./plugins/@container-grid"
import { MyPlugin } from "./plugins/@my-plugin"

const colors = {
  //? neutral colors
  "neutral-white": "rgb(251,251,251)",
  "neutral-black": "rgb(35,41,40)",
  //? main colors
  primary: {
    DEFAULT: "rgb(58,237,211)",
    active: "rgb(105,241,221)",
    accent: "rgb(58,207,201)",
    text: "rgb(3,37,32)",
    hover: "rgb(20,224,194)",
  },
  secondary: {
    DEFAULT: "rgb(121,58,237)",
    active: "rgb(153,105,241)",
    accent: "rgb(121,68,207)",
    text: "rgb(255,255,255)",
    hover: "rgb(92,20,224)",
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
  plugins: [
    MyPlugin,
    Forms({ strategy: "class" }),
    ClurProperties,
    Typography,
    TwAnimate,
    TwScrollbar,
    ContainerGrid,
  ],
} satisfies Config
export default config
