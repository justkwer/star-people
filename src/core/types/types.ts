import { People, Person } from '@core/types';

export type PeopleState = {
  people?: Person[];
  loading: boolean;
  page: number;
  pages: number;
  searchText?: string;
  error: boolean;
};

export type PersonState = {
  person?: Person;
  edit: boolean;
  error: boolean;
};

export type PeopleResponse = {
  count: number;
  next: string;
  previous: null;
  results: People[];
};

export type EmptyProps = {
  title: string;
};

export type UpdatePersonAction = {
  [field: string]: string;
};

export type FieldProps = {
  field: string;
  title: string;
};

export type NavigationProps = {
  onBurger?: boolean;
};

export type CardsProps = {
  cards: Person[];
};
