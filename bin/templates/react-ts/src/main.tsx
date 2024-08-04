import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "./lib/myToast"

const routers = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
])
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={routers} />
  </React.StrictMode>
)
