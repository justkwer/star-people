import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { PathsToPage } from '@/core/constants';
import Typography from '@mui/material/Typography';
import { logoSx } from '@/components/simple/Logo/styled.ts';

export const Logo = () => (
  <Link
    component={RouterLink}
    to={PathsToPage.Main}
    color="inherit"
    underline="hover"
  >
    <Typography noWrap sx={logoSx}>
      Star People
    </Typography>
  </Link>
);
