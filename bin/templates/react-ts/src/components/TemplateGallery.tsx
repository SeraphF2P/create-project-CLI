import { toast } from "~/lib/toast"
import { Btn, Form } from "../ui"
import { ThemeToggler } from "./ThemeToggler"

type TemplateGalleryProps = {}

export const TemplateGallery = (props: TemplateGalleryProps) => {
  return (
    <section className="container relative columns-[288px] space-y-8 py-8 [column-gap:2rem] *:break-inside-avoid-column">
      {/* <------toggles-----> */}
      <div className="flex flex-col-reverse items-center rounded bg-neutral-white/30 py-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="p-4 text-center">toggles</h3>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded">
          {/* <------> */}
          <ThemeToggler />
          {/* <------> */}
        </div>
      </div>

      {/* <------primary-----> */}
      <div className="flex flex-col-reverse items-center rounded bg-neutral-white/30 py-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="p-4 text-center">primary</h3>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded">
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
      <div className="flex flex-col-reverse items-center rounded bg-neutral-white/30 py-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="p-4 text-center">secondary</h3>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded">
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
      <div className="flex flex-col-reverse items-center rounded bg-neutral-white/30 py-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="p-4 text-center">actions</h3>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded">
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
      <div className="flex flex-col-reverse items-center rounded bg-neutral-white/30 py-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="p-4 text-center">buttons</h3>
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
      <div className="flex flex-col-reverse items-center rounded bg-neutral-white/30 py-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="p-4 text-center">notification</h3>
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
      <div className="flex flex-col-reverse items-center rounded bg-neutral-white/30 py-4 shadow-md dark:shadow-neutral-white/30">
        <h3 className="p-4 text-center">buttons disabled</h3>
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
      <div className="flex rounded py-4 shadow-md">
        <h3 className="p-4 text-center">form element</h3>
        <div className="flex flex-col items-center justify-start gap-4 rounded p-4">
          <Form.Input label="text/email" />
          <Form.Input label="password" type="password" />
          <Form.Input label="date" type="date" />
          <Form.Input label="number" type="number" />
          <Form.Input label="text" type="checkbox" />
          <Form.Input label="text" type="radio" />
        </div>
      </div>
    </section>
  )
}
