export const enum PathsToPage {
  Main = '/',
  Person = '/person/:name',
}

export const navLinks = [
  {
    id: 1,
    name: 'People',
    href: PathsToPage.Main,
  },
  {
    id: 2,
    name: 'Person',
    href: 'person/Darth Vader',
  },
];
