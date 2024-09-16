"use client"

import { useScrollDir } from "~/hooks"
import { cn } from "~/lib/cva"
import { motion as m, Variants } from "framer-motion"
import { PropsWithChildren } from "react"

export const Header = ({ children }: PropsWithChildren) => {
  const dir = useScrollDir()
  const animationVariant: Variants = {
    fadeUp: {
      translateY: "-100%",
    },
    initial: {
      translateY: "0px",
    },
  }

  return (
    <m.header
      variants={animationVariant}
      transition={{ ease: "linear" }}
      animate={dir === 1 ? "fadeUp" : "initial"}
      className={cn("fixed left-0 top-0 z-40 w-full")}
    >
      {children}
    </m.header>
  )
}
