import { cn, variants, variantsType } from "~/lib/cva"
import Link, { LinkProps } from "next/link"
import { ComponentPropsWithoutRef, ReactNode } from "react"

export type NextLinkProps = LinkProps &
  ComponentPropsWithoutRef<"a"> &
  variantsType

export const NextLink = ({
  variant = "none",
  colour,
  className,
  tag,
  ...props
}: NextLinkProps) => {
  return (
    <Link
      className={cn(variants({ variant, colour, tag }), className)}
      {...props}
    >
      {props.children}
    </Link>
  )
}
