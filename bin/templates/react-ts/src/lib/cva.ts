import { cva, type VariantProps } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
export const variants = cva(
  `relative flex items-center justify-center px-4 py-2 capitalize tracking-wider transition-[transform_background-color] duration-300`,
  {
    variants: {
      variant: {
        fill: "rounded-sm bg-variant text-variant-text variant-primary enabled:hover:variant-primary-hover enabled:active:scale-95 disabled:bg-gray-400",
        outline:
          "ring-solid ring-2 ring-variant duration-700 variant-primary enabled:hover:bg-variant enabled:active:scale-95 enabled:active:bg-variant disabled:ring-gray-400",
        ghost:
          "variant-primary active:scale-95 enabled:hover:bg-variant/80 enabled:active:bg-variant disabled:bg-gray-400",
        none: "",
      },
    },
    defaultVariants: {
      variant: "fill",
    },
  }
)
export const tw = (inputs: ClassValue) => String.raw`${inputs}`
export type variantsType = VariantProps<typeof variants>
