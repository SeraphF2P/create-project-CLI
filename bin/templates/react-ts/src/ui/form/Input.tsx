import { cn } from "~/lib/cva"
import { ComponentProps, ElementRef, forwardRef, useId } from "react"
import { ErrorMsgWrapper } from "./ErrorMsgWrapper"
import { FormInput } from "./type"

export const Input = forwardRef<
  ElementRef<"input">,
  FormInput & ComponentProps<"input">
>(({ label, errorMSG = "", type = "text", ...props }, forwardedRef) => {
  const id = useId()

  return (
    <ErrorMsgWrapper errorMSG={errorMSG}>
      <input
        ref={forwardedRef}
        id={id}
        className={cn("form-input bg-neutral-white text-neutral-black", {
          "border-alert": Boolean(errorMSG),
          "h-10 w-full rounded border border-neutral-black bg-neutral-white px-4 placeholder:text-center placeholder:capitalize":
            ["text", "email", "password", "number"].includes(type),
          "w-full bg-neutral-white p-0": type === "color",
        })}
        placeholder={label}
        type={type}
        {...props}
      />
    </ErrorMsgWrapper>
  )
})
Input.displayName = "Input"
