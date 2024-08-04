import colors from "tailwindcss/colors"
import plugin from "tailwindcss/plugin"
import { DefaultColors } from "tailwindcss/types/generated/colors"

const rootColors = {
  //? neutral color
  "--neutral-white": "226,232,240",
  "--neutral-black": "30,41,59",

  //? main colors
  "--primary": "120,120,250",
  "--primary-active": "120,120,250",
  "--primary-accent": "120,120,250",
  "--primary-text": "226,232,240",
  "--primary-hover": "100,100,230",

  "--secondry": "250,30,30",
  "--secondry-active": "250,30,30",
  "--secondry-accent": "250,30,30",
  "--secondry-text": "26,32,40",
  "--secondry-hover": "250,30,30",

  //? actions colors
  "--alert": "200,50,50",
  "--success": "110,231,183", //? emerald 300
  "--info": "8,145,178", //? cyan 600
  "--warn": "245,158,11",
}
const hexToRBGChannels = (hex: string) => {
  // Remove the hash at the start if it's there
  if (hex.startsWith("#") === false) return hex

  hex = hex.replace(/^#/, "")

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  return [r, g, b].join(",")
}

export const MyPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ":root": rootColors,
      "::-ms-reveal": {
        filter: "invert(100%)",
      },
    })
    addBase({
      body: {
        "@apply bg-neutral-white  h-screen text-neutral-black": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
      h1: { "@apply capitalize text-2xl": {} },
      h2: { "@apply capitalize text-xl": {} },
      h3: { "@apply capitalize text-lg": {} },
      h4: { "@apply capitalize text-base": {} },
      p: { "@apply text-sm": {} },
      li: { "@apply list-none": {} },
      a: { "@apply !text-current": {} },
    })
    addUtilities({
      ".remove-scroll-bar": {
        "scroll-behavior": "smooth",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
      ".remove-scroll-bar::-webkit-scrollbar": {
        display: "none",
      },
      ".text-border": {
        "text-shadow": `-1px -1px 0 rgb(var(--neutral-black)),
            1px -1px 0 rgb(var(--neutral-black)),
           -1px 1px 0 rgb(var(--neutral-black)),
            1px 1px 0 rgb(var(--neutral-black))`,
      },
      ".writing-mode-htb": {
        "writing-mode": "horizontal-tb",
      },
      ".writing-mode-slr": {
        "writing-mode": "sideways-lr",
      },
      ".writing-mode-srl": {
        "writing-mode": "sideways-rl",
      },
      ".writing-mode-vlr": {
        "writing-mode": "vertical-lr",
      },
      ".writing-mode-vrl": {
        "writing-mode": "vertical-rl",
      },
    })
    const newUtilities: {
      [key: string]:
        | string
        | {
            [key: string]:
              | string
              | { [key: string]: string | { [key: string]: string } }
          }
    } = {}

    Object.entries(rootColors).forEach(([key, value]) => {
      newUtilities[`.variant-${key.slice(2)}`] = {
        "--variant": value,
      }
    })
    Object.keys(colors).forEach((color) => {
      const colorKey = color as keyof DefaultColors
      if (typeof colors[colorKey] === "string") {
        newUtilities[`.variant-${color}`] = {
          "--variant": hexToRBGChannels(colors[colorKey]),
        }
        newUtilities[`.variant-hover-${color}`] = {
          "--variant-hover": hexToRBGChannels(colors[colorKey]),
        }
        newUtilities[`.variant-active-${color}`] = {
          "--variant-active": hexToRBGChannels(colors[colorKey]),
        }
        newUtilities[`.variant-accent-${color}`] = {
          "--variant-accent": hexToRBGChannels(colors[colorKey]),
        }
        newUtilities[`.variant-text-${color}`] = {
          "--variant-text": hexToRBGChannels(colors[colorKey]),
        }
      } else {
        Object.keys(colors[colorKey]).forEach((shade) => {
          const shadeKey =
            shade as keyof (typeof colorKey)[keyof typeof colorKey]
          newUtilities[`.variant-${color}-${shade}`] = {
            "--variant": hexToRBGChannels(colors[colorKey][shadeKey]),
          }
          newUtilities[`.variant-hover-${color}-${shade}`] = {
            "--variant-hover": hexToRBGChannels(colors[colorKey][shadeKey]),
          }
          newUtilities[`.variant-active-${color}-${shade}`] = {
            "--variant-active": hexToRBGChannels(colors[colorKey][shadeKey]),
          }
          newUtilities[`.variant-accent-${color}-${shade}`] = {
            "--variant-accent": hexToRBGChannels(colors[colorKey][shadeKey]),
          }
          newUtilities[`.variant-text-${color}-${shade}`] = {
            "--variant-text": hexToRBGChannels(colors[colorKey][shadeKey]),
          }
        })
      }
    })

    // [("responsive", "hover")]
    addUtilities(newUtilities, { respectImportant: true, respectPrefix: true })
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          //? neutral colors
          "neutral-white": "rgb(var(--neutral-white),<alpha-value>)",
          "neutral-black": "rgb(var(--neutral-black),<alpha-value>)",

          //? main colors
          primary: "rgb(var(--primary),<alpha-value>)",
          "primary-hover": "rgb(var(--primary-hover),<alpha-value>)",
          "primary-active": "rgb(var(--primary-active),<alpha-value>)",
          "primary-accent": "rgb(var(--primary-accent),<alpha-value>)",
          "primary-text": "rgb(var(--primary-text),<alpha-value>)",
          secondry: "rgb(var(--secondry),<alpha-value>)",
          "secondry-hover": "rgb(var(--secondry-hover),<alpha-value>)",
          "secondry-active": "rgb(var(--secondry-active),<alpha-value>)",
          "secondry-accent": "rgb(var(--secondry-accent),<alpha-value>)",
          "secondry-text": "rgb(var(--secondry-text),<alpha-value>)",

          //? action colors
          alert: "rgb(var(--alert),<alpha-value>)",
          success: "rgb(var(--success),<alpha-value>)",
          info: "rgb(var(--info),<alpha-value>)",
          warn: "rgb(var(--warn),<alpha-value>)",
          variant: "rgb(var(--variant),<alpha-value>)",
          "variant-hover": "rgb(var(--variant-hover),<alpha-value>)",
          "variant-active": "rgb(var(--variant-active),<alpha-value>)",
          "variant-accent": "rgb(var(--variant-accent),<alpha-value>)",
          "variant-text": "rgb(var(--variant-text),<alpha-value>)",
        },
        screens: {
          mn: "420px",
          xs: "576px",
        },
        gridAutoColumns: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        gridAutoRows: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        animation: {
          reset: "reset var(--reset-duration) infinite var(--reset-delay)",
          fadein:
            "fadein var(--fadein-duration,0.3s) forwards  var(--fadein-delay,0s)",
          fadeout:
            "fadeout var(--fadeout-duration,0.3s) forwards var(--fadeout-delay,0s)",
          buzz: "buzz 2s infinite linear  ",
          slideDown: "slideDown 0.3s forwards linear  ",
          slideUp: "slideUp 0.3s forwards linear  ",
        },
        keyframes: {
          reset: {
            "50%": {
              transform:
                "translate(0,0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);",
            },
            "0%,100%": {
              transform:
                "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            },
          },
          fadein: {
            to: {
              opacity: "var(--fadein-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          fadeout: {
            from: {
              opacity: "var(--fadeout-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          buzz: {
            "0%,20%,40%,60%,80%,100%": {
              transform: "rotate(0deg) ",
            },
            "10%,50%": {
              transform: "rotate(-12.5deg) ",
            },
            "30%,70%": {
              transform: "rotate(12.5deg)",
            },
          },
          slideDown: {
            from: {
              height: "0",
            },
            to: {
              height: "var(--radix-collapsible-content-height)",
            },
          },
          slideUp: {
            from: {
              height: "var(--radix-collapsible-content-height)",
            },
            to: {
              height: "0",
            },
          },
        },
      },
    },
  }
)
export default MyPlugin
