import { TypographyProps } from '@mui/material/Typography';
import { TextFieldProps } from '@mui/material/TextField';

import { People, Person } from '@core/types';

export type PeopleState = {
  people: undefined | Person[];
  loading: boolean;
};

export type PersonState = {
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
