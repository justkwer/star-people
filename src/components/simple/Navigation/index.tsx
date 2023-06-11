import { navLinks } from '@/core/constants';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { NavigationProps } from '@/core/types';

export const Navigation: FC<NavigationProps> = ({ onBurger }) => (
  <Toolbar
    sx={{
      display: onBurger
        ? { xs: 'flex', md: 'none' }
        : { xs: 'none', md: 'flex' },
      gap: '20px',
    }}
  >
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
