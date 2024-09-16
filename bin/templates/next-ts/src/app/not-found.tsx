import { Icon } from "~/ui"

export default async function NotFound() {
  return (
    <div className="flex h-[calc(100vh_-_80px)] w-full items-center justify-center gap-4 bg-alert-text md:h-[calc(100vh_-_128px)]">
      <h1 className="text-alert">page not found</h1>
      <div className="flex items-center justify-center rounded-full border-2 border-alert">
        <Icon.exclamation className="size-10 text-alert" />
      </div>
    </div>
  )
}
