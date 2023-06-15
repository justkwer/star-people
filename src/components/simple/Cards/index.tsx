import { Card } from '@/components';
import { CardsProps } from '@/core/types';
import Grid from '@mui/material/Grid';
import { FC } from 'react';
import { cardsSX } from '@/components/simple/Cards/styled.ts';

export const Cards: FC<CardsProps> = ({ cards }) => (
  <Grid container spacing={2} sx={cardsSX}>
    {cards.map((person) => (
      <Card {...person} key={person.id} />
    ))}
  </Grid>
);
