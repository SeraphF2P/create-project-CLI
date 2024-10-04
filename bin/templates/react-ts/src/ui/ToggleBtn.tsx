"use client"

import { cn } from "~/lib/cva"
import { Btn, type BtnProps } from "~/ui"
import { ReactNode, useState, type FC } from "react"

interface ToggleBtnProps extends Omit<BtnProps, "children"> {
  defaultToggleState?: boolean
  children?: ReactNode | (({ isToggled }: { isToggled: boolean }) => ReactNode)
}

export const ToggleBtn: FC<ToggleBtnProps> = ({
  defaultToggleState = false,
  className,
  children,
  onClick,
  ...props
}) => {
  const [isToggled, setisToggled] = useState(defaultToggleState)

  return (
    <Btn
      onClick={(e) => {
        e.preventDefault()
        setisToggled((prev) => !prev)
        if (typeof onClick === "function") {
          onClick(e)
        }
      }}
      data-toggled={isToggled}
      className={cn(className)}
      {...props}
    >
      {typeof children === "function" ? children({ isToggled }) : children}
    </Btn>
  )
}
