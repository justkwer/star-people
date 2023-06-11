import { PeopleCardProps } from '@/core/types';
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Field } from '@/components';
import {
  nameProp,
  genderProp,
  birthProp,
  heightProp,
  massProp,
} from './styles';

export const PeopleCard: FC<PeopleCardProps> = ({
  name,
  height,
  mass,
  birth_year,
  gender,
  edit,
  setPerson,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (edit === undefined) navigate(`person/${name}`);
  };

  return (
    <Grid item xs={100}>
      <Card sx={{ width: 1 / 1 }} onClick={handleClick}>
        <CardActionArea>
          <CardContent>
            <Field
              edit={edit}
              title={name}
              prop={nameProp}
              setPerson={setPerson}
            />
            <Field
              edit={edit}
              title={gender}
              prop={genderProp}
              setPerson={setPerson}
            />
            <Field
              edit={edit}
              title={birth_year}
              prop={birthProp}
              setPerson={setPerson}
            />
            <Field
              edit={edit}
              title={height}
              prop={heightProp}
              setPerson={setPerson}
            />
            <Field
              edit={edit}
              title={mass}
              prop={massProp}
              setPerson={setPerson}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
