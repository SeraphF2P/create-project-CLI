import { ReactNode } from "react"

type ErrorMsgWrapperProps = {
  children?: ReactNode
  errorMSG?: string
}

export const ErrorMsgWrapper = (props: ErrorMsgWrapperProps) => {
  return (
    <div className="relative flex flex-col justify-start pb-5">
      {props.children}
      {props.errorMSG && (
        <span className="absolute bottom-0 w-full text-center text-sm text-warn">
          {props.errorMSG}
        </span>
      )}
    </div>
  )
}
