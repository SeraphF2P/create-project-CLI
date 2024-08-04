import { TemplateGallery } from "./components/TemplateGallery"
import "./index.css"

function App() {
  return <>{import.meta.env.DEV && <TemplateGallery />}</>
}

export default App
