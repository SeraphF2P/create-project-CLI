/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { Config } from "tailwindcss"
import Preset from "./src/lib/tailwind/preset"

const config = {
  presets: [Preset],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
} satisfies Config
export default config
