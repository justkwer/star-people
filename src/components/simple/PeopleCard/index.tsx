import { Person } from '@/core/types';
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

  const handleClick = () => {
    if (click === undefined) {
      navigate(`person/${name}`);
    }
  };

  return (
    <Grid item xs={100}>
      <Card sx={{ width: 1 / 1 }} onClick={handleClick}>
        <CardActionArea>
          <CardContent>
            <Field id={id} field="name" title={name} prop={nameProp} />
            <Field id={id} field="gender" title={gender} prop={genderProp} />
            <Field
              id={id}
              field="birth_year"
              title={birth_year}
              prop={birthProp}
            />
            <Field id={id} field="height" title={height} prop={heightProp} />
            <Field id={id} field="mass" title={mass} prop={massProp} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
