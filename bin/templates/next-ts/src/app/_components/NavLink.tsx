"use client"

import { cn } from "~/lib/cva"
import { NextLink, type NextLinkProps } from "~/ui"
import { AnimatePresence, motion as m } from "framer-motion"
import { usePathname } from "next/navigation"

type NavLinkProps = NextLinkProps & {
  layoutId: string
}

export const NavLink = ({
  children,
  className,
  layoutId,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname()

  const isActive = pathname === props.href.toString()
  return (
    <m.div layout layoutRoot className="relative">
      <NextLink
        className={cn("", className, {
          "text-secondary": isActive,
        })}
        tag={"link"}
        {...props}
      >
        {children}
        <AnimatePresence mode="popLayout">
          {isActive && (
            <m.div
              transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
              layout
              layoutId={layoutId}
              className="absolute left-0 size-6 bg-secondary [clip-path:polygon(0%_0%,50%_50%,0%_100%,0%_0%)] md:-bottom-2 md:h-1 md:w-full md:rounded-full md:[clip-path:none]"
            />
          )}
        </AnimatePresence>
      </NextLink>
    </m.div>
  )
}
