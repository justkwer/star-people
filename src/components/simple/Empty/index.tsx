import { EmptyProps } from '@/core/types';
import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { emptySX } from '@/components/simple/Empty/styled.ts';

export const Empty: FC<EmptyProps> = ({ title }) => (
  <Typography variant="h4" sx={emptySX}>
    {title}
  </Typography>
);
