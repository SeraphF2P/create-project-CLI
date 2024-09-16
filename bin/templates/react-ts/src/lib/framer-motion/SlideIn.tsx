"use client"

import { Slot } from "@radix-ui/react-slot"
import { motion, MotionProps } from "framer-motion"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"

type SlideInProps = MotionProps &
  ComponentPropsWithoutRef<"div"> & {
    dir: "top" | "bottom" | "left" | "right"
    dist?: number
    dur?: number
    fade?: boolean
    asChild?: boolean
    duration?: number
    delay?: number
  }

export const SlideIn = forwardRef<ElementRef<"div">, SlideInProps>(
  (
    {
      children,
      dir,
      duration = 0.4,
      delay = 0,
      dist = 36,
      asChild = false,
      ...props
    },
    forwardedRef
  ) => {
    const MotionSlot = motion(Slot)
    const slide = {
      top: {
        opacity: 1,
        y: [`${dist * -1}px`, "0px"],
        transition: { duration, delay },
      },
      bottom: {
        opacity: 1,
        y: [`${dist}px`, "0px"],
        transition: { duration, delay },
      },
      left: {
        opacity: 1,
        x: [`${dist * -1}px`, "0px"],
        transition: { duration, delay },
      },
      right: {
        opacity: 1,
        x: [`${dist}px`, "0px"],
        transition: { duration, delay },
      },
    }
    //? asChild cause layout shift if the child element having transition css property which conflict with framer-motion animation
    return asChild ? (
      <MotionSlot
        initial={{
          opacity: 0,
        }}
        variants={slide}
        whileInView={dir}
        viewport={{ once: true }}
        ref={forwardedRef}
        {...props}
        style={{
          willChange: "opacity",
        }}
      >
        {children}
      </MotionSlot>
    ) : (
      <motion.div
        initial={{
          opacity: 0,
        }}
        variants={slide}
        whileInView={dir}
        viewport={{ once: true }}
        ref={forwardedRef}
        {...props}
        style={{
          willChange: "opacity",
        }}
      >
        {children}
      </motion.div>
    )
  }
)
SlideIn.displayName = "SlideIn"
