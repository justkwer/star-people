import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { errorSx } from '@/pages/Error/styled.ts';

export const ErrorPage = () => (
  <Box sx={errorSx}>
    <Typography variant="h2">Oops!</Typography>
    <Typography>Sorry, an unexpected error has occurred.</Typography>
    <Typography>Something went wrong</Typography>
  </Box>
);
