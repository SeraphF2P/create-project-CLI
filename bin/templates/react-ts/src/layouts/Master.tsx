import { Outlet } from "react-router-dom"

export const Master = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
