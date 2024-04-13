export const yearsTextMapper: { [key: number]: string } = {
  1: 'рік',
  2: 'роки',
  3: 'роки',
  4: 'роки',
  5: 'років',
  6: 'років',
  7: 'років',
  8: 'років',
  9: 'років',
  0: 'років',
};

const getYears = (dateStr: string): string => {
  const date = new Date(dateStr).getTime();
  const currentDate = new Date().getTime();

  const years = Math.floor((currentDate - date) / 1000 / 60 / 60 / 24 / 365);
  return `${years} ${yearsTextMapper[years % 10]}`;
};

export default getYears;
