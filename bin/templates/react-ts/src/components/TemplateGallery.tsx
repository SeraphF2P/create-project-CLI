import { toast } from "~/lib/myToast"
import { Btn } from "./ui"
import Input from "./ui/Input"

type TemplateGalleryProps = {}

export const TemplateGallery = (props: TemplateGalleryProps) => {
  return (
    <main className="container relative flex flex-wrap justify-center gap-4 p-8">
      <div className="flex rounded bg-white/30 py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">primary</h3>
        <div className="flex flex-wrap items-center justify-start overflow-hidden rounded">
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-primary`}
            >
              <p className="text-primary-text">main</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-primary-hover`}
            >
              <p className="text-primary-text">hover</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-primary-active`}
            >
              <p className="text-primary-text">active</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-primary-accent`}
            >
              <p className="text-primary-text">accent</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-primary-text`}
            >
              <p className="text-primary">text</p>
            </div>
          </div>
        </div>
      </div>
      {/* <------> */}
      <div className="flex rounded bg-white/30 py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">secondry</h3>
        <div className="flex flex-wrap items-center justify-start overflow-hidden rounded">
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondry`}
            >
              <p className="text-secondry-text">main</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondry-hover`}
            >
              <p className="text-secondry-text">hover</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondry-active`}
            >
              <p className="text-secondry-text">active</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondry-accent`}
            >
              <p className="text-secondry-text">accent</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondry-text`}
            >
              <p className="text-secondry">text</p>
            </div>
          </div>
        </div>
      </div>
      {/* <------> */}
      <div className="flex rounded bg-white/30 py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">actions</h3>
        <div className="flex flex-wrap items-center justify-start overflow-hidden rounded">
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-success`}
            >
              <p className="text-neutral-black">success</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-alert`}
            >
              <p className="text-neutral-white">alert</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div className={`flex size-24 items-center justify-center bg-info`}>
              <p className="text-neutral-white">info</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div className={`flex size-24 items-center justify-center bg-warn`}>
              <p className="text-neutral-black">warn</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-neutral-black`}
            >
              <p className="text-neutral-white">neutral black</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-neutral-white`}
            >
              <p className="text-neutral-black">neutral white</p>
            </div>
          </div>
        </div>
      </div>
      {/* <------notification-----> */}
      <div className="flex rounded bg-white/30 py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">notification</h3>
        <div className="flex flex-wrap items-center justify-start gap-4 overflow-hidden rounded *:flex-1">
          <Btn onClick={() => toast({ message: "default" })}>default</Btn>
          <Btn
            variant="fill"
            className="variant-primary"
            onClick={() => toast.success({ message: "success" })}
          >
            success
          </Btn>
          <Btn
            className="variant-alert enabled:hover:variant-red-500"
            variant="fill"
            onClick={() => toast.error({ message: "alert" })}
          >
            alert
          </Btn>
          <Btn
            className="variant-info enabled:hover:variant-cyan-500"
            variant="fill"
            onClick={() => toast.info({ message: "info" })}
          >
            info
          </Btn>
          <Btn
            className="variant-warn enabled:hover:variant-amber-400"
            variant="fill"
            onClick={() => toast.warn({ message: "warn" })}
          >
            warn
          </Btn>
        </div>
      </div>
      {/* <------buttons------> */}
      <div className="flex rounded bg-white/30 py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">buttons</h3>
        <div className="flex flex-wrap items-center justify-start gap-4 overflow-hidden rounded p-4 *:flex-1">
          <Btn>default</Btn>
          <Btn variant="fill">fill</Btn>
          <Btn variant="outline">outline</Btn>
          <Btn variant="ghost">ghost</Btn>
          <Btn variant="none">none</Btn>
        </div>
      </div>
      {/* <-----buttons disabled-----> */}
      <div className="flex rounded bg-white/30 py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">buttons disabled</h3>
        <div className="flex flex-wrap items-center justify-start gap-4 overflow-hidden rounded p-4 *:flex-1">
          <Btn disabled>default</Btn>
          <Btn disabled variant="fill">
            fill
          </Btn>
          <Btn disabled variant="outline">
            outline
          </Btn>
          <Btn disabled variant="ghost">
            ghost
          </Btn>
          <Btn disabled variant="none">
            none
          </Btn>
        </div>
      </div>
      {/* <------form element------> */}
      <div className="flex rounded bg-white/30 py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">form element</h3>
        <div className="flex flex-col items-center justify-start gap-4 rounded p-4">
          <Input label="text/email" />
          <Input label="password" type="password" />
          <Input label="date" type="date" />
          <Input label="number" type="number" />
          <Input label="text" type="checkbox" />
          <Input label="text" type="radio" />
        </div>
      </div>
    </main>
  )
}
