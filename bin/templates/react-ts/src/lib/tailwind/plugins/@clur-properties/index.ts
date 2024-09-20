import plugin from "tailwindcss/plugin"

export const ClurProperties = plugin(
  ({ addUtilities, matchUtilities, theme }) => {
    const colors = theme("colors") ?? {}
    const colorsKeys = Object.keys(colors)
    const helper = ({
      color,
      key = "",
    }: {
      key?: string
      color: (typeof colorsKeys)[number]
    }) => {
      const prefix = `clur${key ? `-${key}` : ""}`
      const selectedColor = colors[color]
      if (typeof selectedColor === "string") {
        addUtilities([
          {
            [`.${prefix}-${color}`]: {
              [`--${prefix}`]: selectedColor,
            },
          },
        ])
        return
      }

      matchUtilities(
        {
          [`${prefix}-${color}`]: (val) => {
            return { [`--${prefix}`]: val }
          },
        },
        {
          values: selectedColor,
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
        "--clur": "var(--primary)",
        "--clur-hover": "var(--primary-hover)",
        "--clur-active": "var(--primary-active)",
        "--clur-accent": "var(--primary-accent)",
        "--clur-text": "var(--primary-text)",
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
