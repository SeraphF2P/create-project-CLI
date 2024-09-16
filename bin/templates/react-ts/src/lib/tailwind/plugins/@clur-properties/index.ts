import plugin from "tailwindcss/plugin"
import { KeyValuePair } from "tailwindcss/types/config"

export const ClurProperties = plugin(
  ({ addUtilities, matchUtilities, theme }) => {
    const colors = theme("colors")
    const colorsKeys = Object.keys(colors ?? {})
    const helper = ({
      color,
      key = "",
    }: {
      key?: string
      color: string | KeyValuePair
    }) => {
      if (colors == undefined) return

      const prefix = `clur${key ? `-${key}` : ""}`

      matchUtilities(
        {
          [`${prefix}-${color}`]: (val) => {
            // if ("DEFAULT" in val) return val.DEFAULT
            return { [`--${prefix}`]: val }
          },
        },
        {
          values: theme(`colors.${color}`),
          respectImportant: true,
          respectPrefix: true,
          type: "color",
        }
      )
    }
    colorsKeys.forEach((color) => {
      helper({ color })
      helper({ key: "hover", color })
      helper({ key: "active", color })
      helper({ key: "accent", color })
      helper({ key: "text", color })
    })
    addUtilities({
      ".theme-primary": {
        "--clur": "--primary",
        "--clur-hover": "--primary-hover",
        "--clur-active": "--primary-active",
        "--clur-accent": "--primary-accent",
        "--clur-text": "--primary-text",
      },
    })
  },
  {
    theme: {
      extend: {
        colors: {
          clur: "var(--clur)",
          "clur-hover": "var(--clur-hover)",
          "clur-active": "var(--clur-active)",
          "clur-accent": "var(--clur-accent)",
          "clur-text": "var(--clur-text)",
        },
      },
    },
  }
)

export default ClurProperties
