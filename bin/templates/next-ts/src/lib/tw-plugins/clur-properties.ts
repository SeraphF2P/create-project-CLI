import colors from "tailwindcss/colors"
import plugin from "tailwindcss/plugin"
import { DefaultColors } from "tailwindcss/types/generated/colors"

export const ClurProperties = plugin(
  ({ addUtilities, matchUtilities, theme }) => {
    const colors = theme("colors")
    const colorsKeys = Object.keys(colors ?? {})
    colorsKeys.forEach((color) => {
      matchUtilities(
        {
          [`clur-${color}`]: (val) => {
            return { "--clur": val }
          },
        },
        {
          values: theme(`colors.${color}`),
          respectImportant: true,
          respectPrefix: true,
          type: "color",
        }
      )
      matchUtilities(
        {
          [`clur-text-${color}`]: (val) => {
            return { "--clur-text": val }
          },
        },
        {
          values: theme(`colors.${color}`),
          respectImportant: true,
          respectPrefix: true,
          type: "color",
        }
      )
      matchUtilities(
        {
          [`clur-hover-${color}`]: (val) => {
            return { "--clur-hover": val }
          },
        },
        {
          values: theme(`colors.${color}`),
          respectImportant: true,
          respectPrefix: true,
          type: "color",
        }
      )
      matchUtilities(
        {
          [`clur-active-${color}`]: (val) => {
            return { "--clur-active": val }
          },
        },
        {
          values: theme(`colors.${color}`),
          respectImportant: true,
          respectPrefix: true,
          type: "color",
        }
      )
      matchUtilities(
        {
          [`clur-accent-${color}`]: (val) => {
            return { "--clur-accent": val }
          },
        },
        {
          values: theme(`colors.${color}`),
          respectImportant: true,
          respectPrefix: true,
          type: "color",
        }
      )
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
