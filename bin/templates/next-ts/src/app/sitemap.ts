import { MetadataRoute } from "next"
import { siteConfig } from "../config/site"
import { getAllCVs } from "../serverAcrions"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const workers = await getAllCVs() as unknown as CVType[]
  const workEntries: MetadataRoute.Sitemap = workers.map(worker => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/worker-cv/${worker.id}`,
      lastModified: worker.job.updated_at,
    }
  })

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
    },
    ...siteConfig.header.navigator.map(route => {
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${route.href}`,
        lastModified: new Date(),
      }
    }),
    ...workEntries,
  ]
}
