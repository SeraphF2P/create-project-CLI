import Image, { type ImageProps } from "next/image";
import { ElementRef, forwardRef } from "react";

type NextImageProps = ImageProps & {
  sizes: string;
  src: string;
  alt: string;
};
export const NextImage = forwardRef<ElementRef<"img">, NextImageProps>(
  (props, forwardedRef) => {
    return <Image ref={forwardedRef} {...props} />;
  },
);
NextImage.displayName = "NextImage";
