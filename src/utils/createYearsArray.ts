export const createYearsArr = () => {
  const startYear = 2015;
  const currentYear = new Date().getFullYear();

  const years: string[] = [];

  for (let i = startYear; i <= currentYear; i++) {
    years.push(i.toString());
  }

  return years;
};
