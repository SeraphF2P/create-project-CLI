import { PropsWithChildren } from "react"
import { TankStackContext } from "./TankStackContext"
import { ThemeProvider } from "./ThemeProvider"

export default function Contexts(props: PropsWithChildren) {
  return (
    <TankStackContext>
      <ThemeProvider>{props.children}</ThemeProvider>
    </TankStackContext>
  )
}
