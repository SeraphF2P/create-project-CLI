"use client"

import { NextPage } from "next"
import { ReactNode } from "react"

type templateProps = NextPage & {
  children?: ReactNode
}

export default function Template(props: templateProps) {
  return (
    <main className="min-h-screen bg-neutral-white pt-20 md:pt-32">
      {props.children}
    </main>
  )
}
