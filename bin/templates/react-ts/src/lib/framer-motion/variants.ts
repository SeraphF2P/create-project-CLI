import { Variants } from "framer-motion"

export const fadeInOut: Variants = {
  initial: {
    opacity: 0.1,
    transition: { duration: 1 },
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0.1,
    transition: { duration: 1 },
  },
} as const
