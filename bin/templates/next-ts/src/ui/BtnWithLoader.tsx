import React from "react"
import { cn } from "../lib/cva"
import { Btn, BtnProps } from "./Btn"
import { Spinner } from "./Spinner"

export const BtnWithLoader = ({
  isLoading = false,
  children,
  className,
  ...props
}: BtnProps & { isLoading: boolean }) => {
  return (
    <Btn
      disabled={isLoading}
      className={cn(className, {
        "border-2 border-primary !bg-white": isLoading,
      })}
      {...props}
    >
      {isLoading ? <Spinner className="size-10" /> : children}
    </Btn>
  )
}
