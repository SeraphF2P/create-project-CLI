import { ComponentProps, SVGProps } from "react"
import { cn } from "~/lib/cva"
const svg = {
  col:({className,...props}:ComponentProps<"div">)=> <div {...props} className={cn(" bg-primary flex items-center justify-center size-20",className)}>logo</div>,
  row:({className,...props}:ComponentProps<"div">)=> <div {...props} className={cn(" bg-primary flex items-center justify-center h-20 w-40",className)}>logo</div>,
}

type LogoProps = ComponentProps<"div"> & {
  oriantition?: keyof typeof svg
}

export const Logo = ({ oriantition = "col", ...props }: LogoProps) => {
  return  svg[oriantition](props)
}
