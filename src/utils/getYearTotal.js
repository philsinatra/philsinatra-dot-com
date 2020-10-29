export const getYearTotal = () => {
  const startYear = 2002
  const date = new Date()
  const currentYear = date.getFullYear()
  return currentYear - startYear
}
