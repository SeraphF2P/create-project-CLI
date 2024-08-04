"use client"

import { cn } from "~/lib/cva"
import { Btn, type BtnProps } from "~/ui"
import { useState, type FC } from "react"

interface ToggleBtnProps extends BtnProps {
  whenToggled?: string
  defaultToggleState?: boolean
}

export const ToggleBtn: FC<ToggleBtnProps> = ({
  defaultToggleState = false,
  className,
  whenToggled,
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
      className={cn(className, {
        whenToggled: isToggled,
      })}
      data-checked={isToggled}
      {...props}
    >
      {children}
    </Btn>
  )
}
