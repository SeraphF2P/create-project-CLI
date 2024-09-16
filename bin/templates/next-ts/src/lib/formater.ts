export const toReligion = (val: number | string) => {
  const num = Number(val);
  if (num == 0) return "مسلم"
  if (num == 1) return "مسيحي"
  if (num == 2) return "أخرى"
}
export const toLanguage = (val: number | string) => {
  const num = Number(val);
  return num == 0 ? "عربي" : "انجليزي"

}
export const toJobExperiance = (val: number | string) => {
  const num = Number(val);
  return num == 1 ? "سبق له العمل" : "لم يسبق له"
}