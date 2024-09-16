import { cva, type VariantProps } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
export const variants = cva(
  //? note links don't have the disabled property so this line make this variant work on both links and buttons flawlessly
  `select-none outline-none! text-nowrap text-base disabled:pointer-events-none disabled:cursor-default`,
  {
    variants: {
      variant: {
        fill: "rounded-sm hover:scale-105 active:scale-95 disabled:bg-gray-400",
        outline:
          "ring-solid ring-2 duration-700 hover:scale-105 active:scale-95 disabled:ring-gray-400",
        ghost: "hover:scale-105 active:scale-95 disabled:bg-gray-400",
        none: "",
      },
      colour: {
        primary: "",
        secondary: "",
      },
      tag: {
        btn: "relative flex items-center justify-center rounded mn:px-4 mn:py-2 px-3 py-2  capitalize tracking-wider transition-[transform_background-color] duration-300",
        link: "capitalize tracking-tight transition-[transform_background-color] duration-300",
      },
    },
    defaultVariants: {
      variant: "fill",
      colour: "primary",
      tag: "btn",
    },
    compoundVariants: [
      {
        variant: "fill",
        colour: "primary",
        className: "bg-primary text-primary-text hover:bg-primary-hover",
      },
      {
        variant: "outline",
        colour: "primary",
        className: "ring-primary hover:bg-primary active:bg-primary",
      },
      {
        variant: "ghost",
        colour: "primary",
        className:
          "active::text-primary-text active:bg-primary md:hover:bg-primary/60 md:hover:text-neutral-black",
      },
      {
        variant: "fill",
        colour: "secondary",
        className: "bg-secondary text-secondary-text hover:bg-secondary-hover",
      },
      {
        variant: "outline",
        colour: "secondary",
        className: "ring-secondary hover:bg-secondary active:bg-secondary",
      },
      {
        variant: "ghost",
        colour: "secondary",
        className:
          "hover:bg-secondary/80 hover:text-secondary-text active:bg-secondary",
      },
    ],
  }
)
export const tw = (inputs: ClassValue) => String.raw`${inputs}`
export type variantsType = VariantProps<typeof variants>
