import Image, { type ImageProps } from "next/image"
import { ElementRef, forwardRef } from "react"

type NextImageProps = ImageProps & {
  sizes: string
  src: string
  alt: string
}
export const NextImage = forwardRef<ElementRef<"img">, NextImageProps>(
  ({ alt, ...props }, forwardedRef) => {
    return <Image ref={forwardedRef} alt={alt} {...props} />
  }
)
NextImage.displayName = "NextImage"
