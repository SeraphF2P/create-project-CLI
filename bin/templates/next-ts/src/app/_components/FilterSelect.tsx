"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "~/lib/cva";
import { Btn } from "~/ui";
import { useQueryState } from "next-usequerystate";
import { ComponentPropsWithRef, ElementRef, forwardRef } from "react";


type FilterProps = {
  title: string
  queryKey: string
  options: { id: number; name: string }[]
}
export const FilterSelect = ({ options, queryKey, title }: FilterProps) => {
  // const [queryState, setQueryState] = useQueryState(queryKey)
  return (
    <>
      <RadixSelect.Root
      // onValueChange={(val) => setQueryState(val ?? null)}
      // defaultValue={queryState ?? undefined}
      >
        <RadixSelect.Trigger
          aria-label={title}
          asChild
          className="inline-flex h-8 w-20 justify-between gap-1 rounded bg-white px-4 leading-none text-neutral-black shadow outline-none data-[placeholder]:text-neutral-black hover:bg-primary focus:shadow-[0_0_0_2px] focus:shadow-black"
        >
          <Btn>
            <RadixSelect.Value placeholder={title} />
            <RadixSelect.Icon />
          </Btn>
        </RadixSelect.Trigger>
        <RadixSelect.Content
          position="popper"
          hideWhenDetached
          className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] data-[state=closed]:animate-fadeoutDown data-[state=open]:animate-fadeInUp"
        >
          <RadixSelect.Viewport className="p-1 data-[state=closed]:animate-fadeoutDown data-[state=open]:animate-fadeInUp">
            {options.map((opt) => {
              return (
                <SelectItem key={opt.id} value={opt.id.toString()}>
                  {opt.name}
                </SelectItem>
              )
            })}
            {/* {queryState && (
              //TODO figure out what cuse this type issue
              //@ts-expect-error
              <SelectItem value={undefined}>غير محدد</SelectItem>
            )} */}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Root>
    </>
  )
}
const SelectItem = forwardRef<
  ElementRef<"div">,
  RadixSelect.SelectItemProps & ComponentPropsWithRef<"div">
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className={cn(
        "relative flex h-6 cursor-pointer select-none items-center rounded-sm p-2 px-4 pl-6 pr-9 text-sm leading-none text-neutral-black data-[disabled]:pointer-events-none data-[highlighted]:bg-primary/70 data-[state=checked]:bg-primary data-[disabled]:text-gray-400 data-[highlighted]:text-neutral-white data-[state=checked]:text-primary-text data-[highlighted]:outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
        <RadixSelect.Arrow />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
})
SelectItem.displayName = "SelectItem"