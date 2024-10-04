import { Btn } from "~/ui"
import { useTranslation } from "react-i18next"

export const HomePage = () => {
  const [t, i18n] = useTranslation()
  return (
    <>
      {t("key")}
      <Btn
        onClick={() =>
          i18n.language === "ar"
            ? i18n.changeLanguage("en")
            : i18n.changeLanguage("ar")
        }
      >
        toggle
      </Btn>
    </>
  )
}
