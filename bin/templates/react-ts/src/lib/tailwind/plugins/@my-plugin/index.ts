import plugin from "tailwindcss/plugin"

type RootColorVariables = { [key: string]: string }

export const MyPlugin = plugin(
  ({ addBase, addUtilities, e, matchUtilities, theme }) => {
    addBase({
      "::-ms-reveal": {
        filter: "invert(100%)",
      },
      body: {
        "@apply bg-neutral-white  text-neutral-black caret-primary selection:bg-primary selection:text-primary-text":
          {},
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
    addUtilities(
      {
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
      },
      {
        respectImportant: true,
        respectPrefix: true,
      }
    )
  },
  {
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          "2xl": "1400px",
        },
      },
      fontSize: {
        sm: [
          "clamp(0.875rem, 1.5vw, 1rem)",
          {
            lineHeight: "clamp(1rem, 1.5vw, 1.25rem)",
          },
        ],
        base: [
          "clamp(1rem, 1.5vw, 1.25rem)",
          {
            lineHeight: "clamp(1.25rem, 1.5vw, 1.5rem)",
          },
        ],
        lg: [
          "clamp(1.125rem, 1.5vw, 1.5rem)",
          {
            lineHeight: "clamp(1.5rem, 1.5vw, 1.75rem)",
          },
        ],
        xl: [
          "clamp(1.25rem, 1.5vw, 1.75rem)",
          {
            lineHeight: "clamp(1.75rem, 1.5vw, 2rem)",
          },
        ],
        "2xl": [
          "clamp(1.5rem, 1.5vw, 2.5rem)",
          {
            lineHeight: "clamp(2rem, 1.5vw, 2.5rem)",
          },
        ],
        "3xl": [
          "clamp(1.875rem, 1.5vw, 3rem)",
          {
            lineHeight: "clamp(2.25rem, 1.5vw, 3.25rem)",
          },
        ],
        "4xl": [
          "clamp(2.25rem, 1.5vw, 3.5rem)",
          {
            lineHeight: "clamp(2.5rem, 1.5vw, 3.75rem)",
          },
        ],
        "5xl": [
          "clamp(3rem, 1.5vw, 4rem)",
          {
            lineHeight: "clamp(3.25rem, 1.5vw, 4.25rem)",
          },
        ],
        "6xl": [
          "clamp(3.75rem, 1.5vw, 4.5rem)",
          {
            lineHeight: "clamp(4rem, 1.5vw, 4.75rem)",
          },
        ],
      },
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        // animation: {
        //   buzz: "buzz 2s infinite linear  ",
        //   slideDown: "slideDown 0.3s forwards linear  ",
        //   slideUp: "slideUp 0.3s forwards linear  ",
        //   slidein: "slidein 0.4s linear",
        //   slideout: "slideout 0.4s linear",
        //   fadeIn: "fadeIn 0.4s linear",
        //   fadeout: "fadeout 0.4s linear",
        // },
        // keyframes: {
        //   slidein: {
        //     "0%": { transform: "translate(100%, 0%)" },
        //     "100%": { transform: "translate(0%, 0%)" },
        //   },
        //   slideout: {
        //     "0%": { transform: "translate(0%, 0%)" },
        //     "100%": { transform: "translate(100%, 0%)" },
        //   },
        //   fadeIn: {
        //     from: {
        //       opacity: "0",
        //     },
        //     to: {
        //       opacity: "1",
        //     },
        //   },
        //   fadeout: {
        //     from: {
        //       opacity: "1",
        //     },
        //     to: {
        //       opacity: "0",
        //     },
        //   },
        // },
      },
    },
  }
)
export default MyPlugin
