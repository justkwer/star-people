import { Person } from '@/core/types';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { FC } from 'react';
import { Card as CardMui } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Field } from '@/components';
import { cardContentSx, cardFabSx, cardGridSx } from './styles';
import { changeEdit, updatePeople } from '@/store/reducers';
import Fab from '@mui/material/Fab';
import { selectPerson } from '@/store/selectors';
import Tooltip from '@mui/material/Tooltip';
import { useAppDispatch, useAppSelector } from '@core/hooks';

export const Card: FC<Person & { click?: boolean }> = ({
  name,
  height,
  mass,
  birth_year,
  gender,
  click,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { edit, error, person } = useAppSelector(selectPerson);

  const handleClick = () => {
    if (click === undefined) {
      navigate(`person/${name}`);
    }
  };

  const handleEdit = () => {
    if (!error && person && edit) {
      dispatch(updatePeople(person));
    }

    dispatch(changeEdit(!edit));
  };

  return (
    <Grid item sx={cardGridSx}>
      <CardMui onClick={handleClick}>
        <CardActionArea>
          <CardContent sx={cardContentSx}>
            <Field field="name" title={name} />
            <Field field="gender" title={gender} />
            <Field field="birth_year" title={birth_year} />
            <Field field="height" title={height} />
            <Field field="mass" title={mass} />
          </CardContent>
        </CardActionArea>
        <Tooltip title={edit ? 'Save' : 'Edit'} placement="left">
          <Fab sx={cardFabSx(click)} onClick={handleEdit}>
            {edit ? <DoneIcon /> : <EditIcon />}
          </Fab>
        </Tooltip>
      </CardMui>
    </Grid>
  );
};
