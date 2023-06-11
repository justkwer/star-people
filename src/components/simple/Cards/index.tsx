import { PeopleCard } from '@/components';
import { People } from '@/core/types';
import Grid from '@mui/material/Grid';
import { FC } from 'react';

export const Cards: FC<{ cards: People[] }> = ({ cards }) => (
  <Grid container spacing={3}>
    {cards.map((person) => (
      <PeopleCard {...person} key={person.name} />
    ))}
  </Grid>
);
