import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { FC } from "react"
import { Icon } from "ui"

interface NoContentProps {
  caption?: string
}

export const NoContent: FC<NoContentProps> = ({
  caption = "عذرا لايوجد نتائج",
}) => {
  return (
    <div className="m-auto flex h-[135px] w-[240px] flex-col items-center justify-center gap-2 rounded border border-gray-500 shadow-sm">
      <AccessibleIcon label="info">
        <Icon.info className="size-1/2" />
      </AccessibleIcon>
      <p>{caption}</p>
    </div>
  )
}

NoContent.displayName = "NoContent"
