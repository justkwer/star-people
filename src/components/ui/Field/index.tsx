import { FieldProps } from '@/core/types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

export const Field: FC<FieldProps> = ({ edit, title, prop, setPerson }) => {
  return edit ? (
    <TextField
      label={edit ? 'Controlled' : 'Uncontrolled'}
      value={title}
      error={title.length === 0 && true}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({ [title]: event.target.value });
      }}
      {...prop[0]}
    />
  ) : (
    <Typography {...prop[1]}>{title}</Typography>
  );
};
