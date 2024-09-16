import plugin from "tailwindcss/plugin"

export const ContainerGrid = plugin(
  ({ addUtilities, e, matchUtilities, theme }) => {
    addUtilities({
      ".breakout": {
        "--_cg-padding": "var(--cg-padding, 1rem)",
        "--_cg-content-max-width": "var(--cg-content-max-width, 100%)",
        "--cg-gusture": "(var(--_cg-padding) - var(--breakout, 0px))",
        "--cg-content-width": `min(
        100% - (var(--cg-gusture) * 2),
        var(--_cg-content-max-width)
  )`,
        display: "grid",
        "grid-template-columns": `
         [breakout-start]
         max(var(--cg-gusture), (100% - var(--cg-content-width)) / 2)
         [content-start]
         var(--cg-content-width)
         [content-end]
         max(var(--cg-gusture), (100% - var(--cg-content-width)) / 2)
         [breakout-end]`,
      },
      ".container-grid": {
        "--_cg-padding": "var(--cg-padding, 1rem)",
        "--_cg-content-max-width": "var(--cg-content-max-width, 100%)",
        "--cg-gusture": "(var(--_cg-padding) - var(--breakout, 0px))",
        "--cg-content-width": `min(
        100% - (var(--cg-gusture) * 2),
        var(--_cg-content-max-width)
  )`,
        display: "grid",
        "grid-template-columns": `
         [breakout-start]
         max(var(--cg-gusture), (100% - var(--cg-content-width)) / 2)
         [content-start]
         var(--cg-content-width)
         [content-end]
         max(var(--cg-gusture), (100% - var(--cg-content-width)) / 2)
         [breakout-end]`,
      },
      ".breakout > *": {
        "grid-column": "content",
      },
      ".container-grid > *": {
        "grid-column": "content",
      },
      ".container-grid > .breakout": {
        "grid-column": "breakout",
      },
      "@media (min-width: 640px)": {
        ".container-grid": {
          "--_cg-padding": "var(--cg-padding, 2rem)",
        },
        ".breakout": {
          "--_cg-padding": "var(--cg-padding, 2rem)",
        },
      },
      "@media (min-width: 768px)": {
        ".container-grid": {
          "--_cg-padding": "var(--cg-padding, 3rem)",
        },
        ".breakout": {
          "--_cg-padding": "var(--cg-padding, 3rem)",
        },
      },
      "@media (min-width: 1024px)": {
        ".container-grid": {
          "--_cg-padding": "var(--cg-padding, 4rem)",
        },
        ".breakout": {
          "--_cg-padding": "var(--cg-padding, 4rem)",
        },
      },
    })
    matchUtilities(
      {
        breakout: (val) => {
          return { "--breakout": `${val}` }
        },
      },
      {
        values: theme("width"),
        supportsNegativeValues: true,
        respectImportant: true,
        respectPrefix: true,
        type: "length",
      }
    )
  }
)
export default ContainerGrid
