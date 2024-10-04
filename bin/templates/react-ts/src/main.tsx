import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contexts from "./contexts/Contexts"
import "./i18n"
import "./index.css"
import { Master } from "./layouts/Master"
import { ToastContainer } from "./lib/toast"
import { HomePage } from "./pages/HomePage"

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Master />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <Contexts>
      <RouterProvider router={routers} />
    </Contexts>
  </React.StrictMode>
)
