import { cn } from "~/lib/cva"
import { ComponentProps, ElementRef, forwardRef, useId } from "react"
import { ErrorMsgWrapper } from "./ErrorMsgWrapper"
import { FormInput } from "./type"

export const Textarea = forwardRef<
  ElementRef<"textarea">,
  FormInput & ComponentProps<"textarea">
>(({ label, errorMSG = "", ...props }, forwardedRef) => {
  const id = useId()

  return (
    <ErrorMsgWrapper errorMSG={errorMSG}>
      <textarea
        ref={forwardedRef}
        id={id}
        className={cn("form-textarea bg-neutral-white text-neutral-black", {
          "border-alert": Boolean(errorMSG),
          "h-32 w-full resize-none rounded border border-neutral-black bg-neutral-white p-2 placeholder:text-center placeholder:capitalize":
            true,
        })}
        placeholder={label}
        cols={30}
        rows={10}
        {...props}
      />
    </ErrorMsgWrapper>
  )
})
Textarea.displayName = "Textarea"
