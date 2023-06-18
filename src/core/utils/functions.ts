export const getDescriptionTitle = (title: string) => {
  switch (title) {
    case 'name':
      title = '';
      break;
    case 'birth_year':
      title = 'birth: ';
      break;
    default:
      title += ': ';
  }
  return title;
};
