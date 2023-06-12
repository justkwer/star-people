import { PeopleCard } from '@/components';
import { CardsProps } from '@/core/types';
import Grid from '@mui/material/Grid';
import { FC } from 'react';

export const Cards: FC<CardsProps> = ({ cards }) => (
  <Grid
    container
    spacing={2}
    sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
  >
    {cards.map((person) => (
      <PeopleCard {...person} key={person.id} />
    ))}
  </Grid>
);
