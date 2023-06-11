import { EmptyProps } from '@/core/types';
import { FC } from 'react';

export const Empty: FC<EmptyProps> = ({ title }) => (
  <div>
    <h3>{title}</h3>
  </div>
);
