import { useThemeToggle } from "~/contexts/ThemeProvider"
import { Btn } from "~/ui"

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeToggle()
  return (
    <Btn className="shadow-md ring-2" onClick={() => toggleTheme()}>
      {theme}
    </Btn>
  )
}
