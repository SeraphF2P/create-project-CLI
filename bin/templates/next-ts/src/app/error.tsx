"use client"

import { Btn } from "~/ui"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="fixed left-0 top-0 grid h-screen w-full p-4">
      <div className="m-auto rounded border-2 border-alert p-4">
        <h2>لقد حدث خطأ أثناء عرض الصفحة</h2>
        <Btn onClick={reset}>حاول مرة أخرى</Btn>
      </div>
    </div>
  )
}
