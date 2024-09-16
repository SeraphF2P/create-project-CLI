"use client"

import * as RadixSelect from "@radix-ui/react-select"
import { cn } from "~/lib/cva"
import { ComponentPropsWithRef, ElementRef, forwardRef } from "react"
import { ErrorMsgWrapper } from "./ErrorMsgWrapper"

type SelectProps = RadixSelect.SelectProps & {
  title: string
  errorMSG?: string
}

export const Root = ({ title, errorMSG, ...props }: SelectProps) => {
  return (
    <RadixSelect.Root {...props}>
      <ErrorMsgWrapper errorMSG={errorMSG}>
        <RadixSelect.Trigger
          aria-label={title}
          className="flex h-10 form-select w-full items-center justify-center rounded border border-neutral-black bg-neutral-white px-4 leading-none text-neutral-black shadow outline-none placeholder:text-center placeholder:capitalize data-[placeholder]:text-neutral-black focus:ring-1 focus:ring-black"
        >
          <RadixSelect.Value placeholder={title} />
        </RadixSelect.Trigger>
      </ErrorMsgWrapper>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          align="center"
          className="w-[288px] overflow-hidden rounded-md bg-white  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] data-[state=closed]:animate-fadeoutDown data-[state=open]:animate-fadeInUp"
        >
          <RadixSelect.Viewport className="w-full p-1 data-[state=closed]:animate-fadeoutDown data-[state=open]:animate-fadeInUp">
            {props.children}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export const Item = forwardRef<
  ElementRef<"div">,
  RadixSelect.SelectItemProps & ComponentPropsWithRef<"div">
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className={cn(
        "relative flex h-6 w-full cursor-pointer select-none items-center justify-center rounded-sm p-2 px-4 pl-6 pr-9 text-sm leading-none text-neutral-black data-[disabled]:pointer-events-none data-[highlighted]:bg-primary/70 data-[state=checked]:bg-primary data-[disabled]:text-gray-400 data-[highlighted]:text-neutral-white data-[state=checked]:text-primary-text data-[highlighted]:outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  )
})
Item.displayName = "SelectItem"
