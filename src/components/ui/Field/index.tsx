import { FieldProps } from '@/core/types';
import { changeError, updatePerson } from '@/store/reducers';
import { selectPerson } from '@/store/selectors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC, ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fieldSx } from './styles';
import { Box } from '@mui/material';

export const Field: FC<FieldProps> = ({ field, title }) => {
  const { edit } = useSelector(selectPerson);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();

    if (value) {
      if (error) {
        setError(false);
        dispatch(changeError(false));
      } else
        dispatch(
          updatePerson({
            [field]: value,
          }),
        );
    } else {
      setError(true);
      dispatch(changeError(true));
    }
  };

  return edit ? (
    <TextField
      error={error}
      defaultValue={title}
      label={field}
      onChange={handleChange}
      {...fieldSx[field].at(0)}
    />
  ) : (
    <Typography {...fieldSx[field].at(1)}>
      {field !== 'name' && field !== 'birth_year' && field + ': '}
      {field === 'birth_year' && 'birth: '}
      <Box color="blue">{title}</Box>
    </Typography>
  );
};
