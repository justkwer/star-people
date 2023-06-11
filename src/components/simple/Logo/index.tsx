import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { PathsToPage } from '@/core/constants';
import Typography from '@mui/material/Typography';

export const Logo = () => (
  <Link
    component={RouterLink}
    to={PathsToPage.Main}
    color="inherit"
    underline="hover"
  >
    <Typography
      noWrap
      sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Star People
    </Typography>
  </Link>
);
