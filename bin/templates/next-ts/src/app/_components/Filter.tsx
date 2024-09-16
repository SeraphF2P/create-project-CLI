import { cn } from "~/lib/cva"
import { Btn } from "~/ui"
import { useQueryState } from "next-usequerystate"

type FilterProps = {
  querykey: string
  title: string
  options: { id: number; name: string; value: string }[]
}

export const Filter = ({ options, querykey, title }: FilterProps) => {
  const [querystate, setQuerystate] = useQueryState(querykey)
  return (
    <section className={"w-full"}>
      <h2 className="w-full text-center">{title}</h2>
      <div className="container flex flex-wrap items-center justify-center gap-2 p-2">
        {options.map((opt) => {
          const isSelected = querystate === opt.value
          return (
            <Btn
              key={opt.id}
              variant={"outline"}
              onClick={() => {
                if (isSelected) {
                  setQuerystate(null)
                } else {
                  setQuerystate(opt.value)
                }
              }}
              className={cn(
                "flex items-center justify-center rounded-full px-4 pb-0 pt-2 hover:text-primary-text",
                {
                  "bg-primary text-primary-text": isSelected,
                }
              )}
            >
              {opt.name}
            </Btn>
          )
        })}
      </div>
    </section>
  )
}
