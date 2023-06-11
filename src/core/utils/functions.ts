export const searchRegExp = (str: string) => {
  const escapeRegExp = str.replace(/[[()\\]/g, '\\$&');

  return new RegExp(escapeRegExp, 'gi');
};
