import { cn, variants, type variantsType } from "~/lib/cva"
import type { ComponentPropsWithRef } from "react"
import { forwardRef } from "react"

export interface BtnProps
  extends ComponentPropsWithRef<"button">,
    variantsType {}

export const Btn = forwardRef<HTMLButtonElement, BtnProps>(
  (
    { className, variant, colour, children, type = "button", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={cn(variants({ variant, colour }), className)}
      >
        {children}
      </button>
    )
  }
)
