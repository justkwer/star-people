import { navLinks } from '@/core/constants';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { NavigationProps } from '@/core/types';
import { navigationSx } from '@/components/simple/Navigation/styled.ts';

export const Navigation: FC<NavigationProps> = ({ onBurger }) => (
  <Toolbar sx={navigationSx(onBurger)}>
    {navLinks.map(({ id, name, href }) => (
      <Link
        component={RouterLink}
        to={href}
        key={id}
        href={href}
        underline="hover"
        color="inherit"
        variant="button"
      >
        {name}
      </Link>
    ))}
  </Toolbar>
);
