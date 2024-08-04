import { cn } from "~/lib/cva"
import { ComponentProps, forwardRef, useId } from "react"

interface InputProps extends ComponentProps<"input"> {
  label: string
  errorMSG?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMSG = "", type = "text", ...props }, forwardedRef) => {
    const id = useId()

    return ["text", "email", "password", "number", "color"].includes(type) ? (
      <div className="relative flex flex-col justify-start pb-5">
        <input
          ref={forwardedRef}
          id={id}
          className={cn("form-input w-48", {
            "border-alert": Boolean(errorMSG),
            "h-10 text-variant-text variant-neutral-black placeholder:text-center placeholder:capitalize":
              ["text", "email", "password", "number"].includes(type),
            "w-full bg-variant p-0 variant-neutral-white": type === "color",
          })}
          placeholder={label}
          type={type}
          {...props}
        />
        {errorMSG && (
          <span className="absolute bottom-0 w-full text-center text-sm text-warn">
            {errorMSG}
          </span>
        )}
      </div>
    ) : type === "checkbox" ? (
      <input
        ref={forwardedRef}
        type="checkbox"
        className={cn("size-4 accent-primary")}
        {...props}
      />
    ) : type === "radio" ? (
      <input
        ref={forwardedRef}
        type="radio"
        className={cn("size-4 accent-primary")}
        {...props}
      />
    ) : (
      ""
    )
  }
)

export default Input
