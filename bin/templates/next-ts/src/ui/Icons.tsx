import { SVGProps } from "react"
import {
  BsChatLeftDots,
  BsClipboardHeart,
  BsEnvelope,
  BsExclamation,
  BsGeoAltFill,
  BsGrid,
  BsInfoCircle,
  BsJournalMedical,
  BsList,
  BsTelephone,
  BsTiktok,
  BsWhatsapp
} from "react-icons/bs"
import { cn } from "~/lib/cva"

type IconType = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>

export const Icon = {
  info: BsInfoCircle,
  whatsApp: ({className,...props}:IconType) => BsWhatsapp({className:cn(" fill-green-500",className),...props}),
  tiktok: BsTiktok,
  exclamation: BsExclamation,
  burgerMenu: BsList,
  googlePin: BsGeoAltFill,
  telephone:({className,...props}:IconType)=>BsTelephone({className:cn(" fill-green-500",className),...props}),
  envelope:({className,...props}:IconType)=>BsEnvelope({className:cn(" fill-amber-700",className),...props}),
  afterRecruit1:BsClipboardHeart,
  afterRecruit2:BsJournalMedical,
  afterRecruit3:BsChatLeftDots,
  list1:BsGrid,
  twitterX: ({ className, ...props }: IconType) => (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      className={cn("fill-black", className)}
      aria-label="X"
      width="20"
      height="20"
      {...props}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
    </svg>
  ),
}
export type IconName = keyof typeof Icon
