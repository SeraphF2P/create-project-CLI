import { QueryClient, QueryClientContext } from "@tanstack/react-query"
import React, { PropsWithChildren, useState } from "react"

export const TankStackContext = (props: PropsWithChildren) => {
  const [client] = useState(() => new QueryClient())
  return (
    <QueryClientContext.Provider value={client}>
      {props.children}
    </QueryClientContext.Provider>
  )
}
