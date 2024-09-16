import { Spinner } from "~/ui/Spinner"

export default async function Loading() {
  return (
    <section className="flex h-screen items-center justify-center">
      <Spinner />
    </section>
  )
}
