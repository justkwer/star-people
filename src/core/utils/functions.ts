export const getDescriptionTitle = (title: string) => {
  if (title === 'name') return '';
  if (title === 'birth_year') return 'birth: ';
  return title + ': ';
};
