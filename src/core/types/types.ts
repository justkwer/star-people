import { MyPerson, Person } from '@core/types';

export type PeopleResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Person[];
};

export type PeopleState = {
  people?: MyPerson[];
  loading: boolean;
  error: boolean;
  page: number;
  pages: number;
};

export type PersonState = {
  person?: MyPerson;
  edit: boolean;
  error: boolean;
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
  cards: MyPerson[];
};
