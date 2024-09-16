import { TemplateGallery } from "~/components"

export const HomePage = () => {
  return <>{import.meta.env.DEV && <TemplateGallery />}</>
}
