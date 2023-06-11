import { TypographyProps } from '@mui/material/Typography';
import { TextFieldProps } from '@mui/material/TextField';

import { People, PeopleCardProps } from '@core/types';

export type PeopleState = {
  people: undefined | People[];
  loading: boolean;
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

export type FieldProps = {
  edit?: boolean;
  title: string;
  prop: [TextFieldProps, TypographyProps];
  setPerson: PeopleCardProps['setPerson'];
};
