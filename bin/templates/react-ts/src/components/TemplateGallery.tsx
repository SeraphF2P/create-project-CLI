import { toast } from "~/lib/toast"
import { Btn, Form } from "../ui"
import { ThemeToggler } from "./ThemeToggler"

type TemplateGalleryProps = {}

export const TemplateGallery = (props: TemplateGalleryProps) => {
  return (
    <main className="relative flex flex-wrap justify-center gap-4 p-8 container-grid">
      <ThemeToggler />
      {/* <------primary-----> */}
      <div className="flex rounded bg-neutral-white/30 py-4 pr-4 shadow-md dark:shadow-neutral-white/30">
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
      {/* <------secondary-----> */}
      <div className="flex rounded bg-neutral-white/30 py-4 pr-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="px-4 text-center writing-mode-vrl">secondary</h3>
        <div className="flex flex-wrap items-center justify-start overflow-hidden rounded">
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondary`}
            >
              <p className="text-secondary-text">main</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondary-hover`}
            >
              <p className="text-secondary-text">hover</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondary-active`}
            >
              <p className="text-secondary-text">active</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondary-accent`}
            >
              <p className="text-secondary-text">accent</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-secondary-text`}
            >
              <p className="text-secondary">text</p>
            </div>
          </div>
        </div>
      </div>
      {/* <------actions-----> */}
      <div className="flex rounded bg-neutral-white/30 py-4 pr-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="px-4 text-center writing-mode-vrl">actions</h3>
        <div className="flex flex-wrap items-center justify-start overflow-hidden rounded">
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-success`}
            >
              <p className="text-success-text">success</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div
              className={`flex size-24 items-center justify-center bg-alert`}
            >
              <p className="text-alert-text">alert</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div className={`flex size-24 items-center justify-center bg-info`}>
              <p className="text-info-text">info</p>
            </div>
          </div>
          {/* <------> */}
          <div className="flex flex-col items-center capitalize">
            <div className={`flex size-24 items-center justify-center bg-warn`}>
              <p className="text-warn-text">warn</p>
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
      {/* <------buttons------> */}
      <div className="flex rounded bg-neutral-white/30 py-4 pr-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="px-4 text-center writing-mode-vrl">buttons</h3>
        <div className="flex flex-wrap items-center justify-start gap-4 p-4 *:flex-1">
          <Btn>default</Btn>
          <Btn colour="primary" variant="fill">
            fill
          </Btn>
          <Btn colour="primary" variant="outline">
            outline
          </Btn>
          <Btn colour="primary" variant="ghost">
            ghost
          </Btn>
          <Btn colour="primary" variant="none">
            none
          </Btn>
        </div>
      </div>
      {/* <------notification-----> */}
      <div className="flex rounded bg-neutral-white/30 py-4 pr-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="px-4 text-center writing-mode-vrl">notification</h3>
        <div className="flex flex-wrap items-center justify-start gap-4 *:flex-1">
          <Btn colour="secondary" onClick={() => toast({ message: "default" })}>
            default
          </Btn>
          <Btn
            colour="secondary"
            variant="fill"
            onClick={() => toast.success({ message: "success" })}
          >
            success
          </Btn>
          <Btn
            colour="secondary"
            variant="outline"
            onClick={() => toast.error({ message: "alert" })}
          >
            alert
          </Btn>
          <Btn
            colour="secondary"
            variant="ghost"
            onClick={() => toast.info({ message: "info" })}
          >
            info
          </Btn>
          <Btn
            colour="secondary"
            variant="none"
            onClick={() => toast.warn({ message: "warn" })}
          >
            warn
          </Btn>
        </div>
      </div>

      {/* <-----buttons disabled-----> */}
      <div className="flex rounded bg-neutral-white/30 py-4 pr-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="px-4 text-center writing-mode-vrl">buttons disabled</h3>
        <div className="flex flex-wrap items-center justify-start gap-4 p-4 *:flex-1">
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
      <div className="flex rounded py-4 pr-4 shadow-md">
        <h3 className="px-4 text-center writing-mode-vrl">form element</h3>
        <div className="flex flex-col items-center justify-start gap-4 rounded p-4">
          <Form.Input label="text/email" />
          <Form.Input label="password" type="password" />
          <Form.Input label="date" type="date" />
          <Form.Input label="number" type="number" />
          <Form.Input label="text" type="checkbox" />
          <Form.Input label="text" type="radio" />
        </div>
      </div>
    </main>
  )
}
