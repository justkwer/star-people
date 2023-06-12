import { TypographyProps } from '@mui/material/Typography';
import { TextFieldProps } from '@mui/material/TextField';

import { People, Person } from '@core/types';

export type PeopleState = {
  people?: Person[];
  loading: boolean;
  page: number;
  searchText?: string;
  edit: boolean;
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
  id: string;
  [field: string]: string;
};

export type FieldProps = {
  id: string;
  field: string;
  title: string;
  prop: [TextFieldProps, TypographyProps];
};

export type NavigationProps = {
  onBurger?: boolean;
};

export type CardsProps = {
  cards: Person[];
};
