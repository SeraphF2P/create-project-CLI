import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import * as RadixModal from "@radix-ui/react-dialog"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "~/config/site"
import { TankStackQuery } from "~/context/TankStackQuery"
import { Btn, Icon, Logo, NextLink } from "~/ui"
import {  NavLink } from "./_components"
import { Header } from "./_components/Header"
import "./globals.css"

export const metadata: Metadata = {
   metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: "",
  description:
    "",
}
export const viewport :Viewport = {
  themeColor:"rgb(189,13,68)"
}
const inter = Inter({
 variable:"--font-inter",
 weight:["400","500","700"],
 subsets:["latin"]
})
// const shamel = LocalFont({
//   src: [
//     {
//       path: "../../public/ArbFonts.com-(2)/ArbFONTS-FFShamelFamily-SansOneBold.ttf",
//       style: "bold",
//       weight: "700",
//     },
//     {
//       path: "../../public/ArbFonts.com-(2)/ArbFONTS-FFShamelFamily-SansOneBook.ttf",
//       style: "400",
//       weight: "normal",
//     },
//   ],
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.className} h-screen overflow-y-scroll scroll-smooth font-normal scrollbar-thin scrollbar-none`}
    >
      <body className=" appearance-none">
        <TankStackQuery>
          <Header>

            <div className="flex h-20 items-center justify-between bg-neutral-white p-2 text-neutral-black shadow">
              <div className="container flex flex-row items-center justify-between">
                <Logo oriantition="row" />
                {/* <------mobile------ */}
                <RadixModal.Root>
                  <RadixModal.Trigger  className="flex md:hidden" asChild>
                    <Btn variant={"ghost"} className="p-2">
                      <AccessibleIcon label="main navigation menu">
                        <Icon.burgerMenu className="size-10" />
                      </AccessibleIcon>
                    </Btn>
                  </RadixModal.Trigger>
                  <RadixModal.Portal>
                    <RadixModal.Overlay className="fixed left-0 top-0 z-40 h-screen w-full bg-gray-700/70 backdrop-blur data-[state=closed]:animate-fadeout data-[state=open]:animate-fadeIn"></RadixModal.Overlay>
                    <RadixModal.Title className="sr-only">
                      القائمة الاساسية
                    </RadixModal.Title>
                    <RadixModal.Content
                      aria-describedby={undefined}
                      className="fixed  left-0 top-0 outline-none! z-40 h-screen w-[calc(100%_-_80px)] max-w-[420px] overflow-y-scroll bg-neutral-white text-neutral-black scrollbar-thin data-[state=closed]:animate-slideOutToRight data-[state=open]:animate-slideInFromRight"
                    >
                      <div className="flex items-center justify-center pt-8">
                        <Logo oriantition="col" />
                      </div>
                      <nav>
                        <ul className="flex flex-col items-center justify-center divide-y-[1px] p-8">
                          {siteConfig.header.navigator.map((link) => (
                            <li key={link.name} className="w-full py-1">
                              <NavLink
                                variant={"ghost"}
                                layoutId={"nav-active-route-indicator-mobile"}
                                colour={"primary"}
                                className="flex items-center justify-center p-2 text-center leading-9"
                                href={link.href}
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
             
                    </RadixModal.Content>
                  </RadixModal.Portal>
                </RadixModal.Root>

                {/* <------disk top------ */}

                <nav className="hidden w-full md:block">
                  <ul className="flex w-full justify-end lg:gap-4">
                    {siteConfig.header.navigator.map((link) => {
                      return (
                        <li key={link.name}>
                          <NavLink
                            layoutId={"nav-active-route-indicator-disktop"}
                            className="flex w-full items-center justify-center text-nowrap px-2 text-center text-[clamp(0.7rem,1.5vw,0.8rem)] lg:text-sm leading-4 lg:tracking-tight tracking-tighter hover:text-secondary"
                            href={link.href}
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </Header>
          {children}
        </TankStackQuery>
      </body>
    </html>
  )
}
