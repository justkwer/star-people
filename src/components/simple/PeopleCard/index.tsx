import { Person } from '@/core/types';
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Field } from '@/components';
import { CardContentSx } from './styles';

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
    <Grid item xs={4}>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardContent {...CardContentSx}>
            <Field id={id} field="name" title={name} />
            <Field id={id} field="gender" title={gender} />
            <Field id={id} field="birth_year" title={birth_year} />
            <Field id={id} field="height" title={height} />
            <Field id={id} field="mass" title={mass} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
