import { FieldProps } from '@/core/types';
import { changeError, updatePerson } from '@/store/reducers';
import { selectPerson } from '@/store/selectors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ChangeEvent, FC, useState } from 'react';
import { fieldName, fieldSx } from './styled';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import { getDescriptionTitle } from '@core/utils';

export const Field: FC<FieldProps> = ({ field, title }) => {
  const { edit } = useAppSelector(selectPerson);
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();

    if (value && !error) {
      dispatch(
        updatePerson({
          [field]: value,
        }),
      );
    } else {
      setError(Boolean(!value));
      dispatch(changeError(Boolean(!value)));
    }
  };

  return edit ? (
    <TextField
      error={error}
      defaultValue={title}
      label={field}
      onChange={handleChange}
      variant="filled"
      {...fieldSx.textField}
      sx={fieldSx.sx}
    />
  ) : (
    <Typography
      {...fieldSx.typography}
      sx={field === 'name' ? fieldName : fieldSx.sx}
    >
      {getDescriptionTitle(field)}
      <Box color="blue" component="span" sx={fieldSx.sx}>
        {title}
      </Box>
    </Typography>
  );
};
