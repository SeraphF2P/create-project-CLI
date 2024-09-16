"use client"

import { AnimatePresence, AnimatePresenceProps } from "framer-motion"
import { ReactNode } from "react"

export const AnimatePresenceClient = (
  props: AnimatePresenceProps & { children: ReactNode }
) => <AnimatePresence {...props} />
