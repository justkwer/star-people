import { FieldProps } from '@/core/types';
import { updatePerson } from '@/store/reducers';
import { selectPerson } from '@/store/selectors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Field: FC<FieldProps> = ({ id, field, title, prop }) => {
  const { edit } = useSelector(selectPerson);
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
      label="Uncontroled"
      defaultValue={title}
      onChange={handleChange}
      {...prop[0]}
    />
  ) : (
    <Typography {...prop[1]}>{title}</Typography>
  );
};
