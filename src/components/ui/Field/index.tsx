import { useAppSelector } from '@/core/hooks';
import { FieldProps } from '@/core/types';
import { updatePerson } from '@/store/reducers';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export const Field: FC<FieldProps> = ({ id, field, title, prop }) => {
  const { edit } = useAppSelector((state) => state.person);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePerson({
        id: id,
        [field]: event.target.value,
      }),
    );
  };

  return edit ? (
    <TextField
      label={'Uncontroled'}
      defaultValue={title}
      onChange={handleChange}
      {...prop[0]}
    />
  ) : (
    <Typography {...prop[1]}>{title}</Typography>
  );
};
