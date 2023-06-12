import { Person } from '@/core/types';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Field } from '@/components';
import { cardContentSx, fabSx } from './styles';
import { toggleEdit } from '@/store/reducers';
import Fab from '@mui/material/Fab';
import { selectPeople } from '@/store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

export const PeopleCard: FC<Person & { click?: boolean }> = ({
  id,
  name,
  height,
  mass,
  birth_year,
  gender,
  click,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { edit } = useSelector(selectPeople);

  const handleClick = () => {
    if (click === undefined) {
      navigate(`person/${name}`);
    }
  };

  const handleEdit = () => {
    dispatch(toggleEdit(!edit));
  };

  return (
    <Grid item xs={4}>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardContent {...cardContentSx}>
            <Field id={id} field="name" title={name} />
            <Field id={id} field="gender" title={gender} />
            <Field id={id} field="birth_year" title={birth_year} />
            <Field id={id} field="height" title={height} />
            <Field id={id} field="mass" title={mass} />
          </CardContent>
        </CardActionArea>
        <Tooltip title={edit ? 'Save' : 'Edit'} placement="left">
          <Fab {...fabSx(click)} onClick={handleEdit}>
            {edit ? <DoneIcon /> : <EditIcon />}
          </Fab>
        </Tooltip>
      </Card>
    </Grid>
  );
};
