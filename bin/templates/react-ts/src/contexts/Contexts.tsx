import { PropsWithChildren } from "react"
import { TankStackContext } from "./TankStackContext"

export default function Contexts(props: PropsWithChildren) {
  return <TankStackContext>{props.children}</TankStackContext>
}
