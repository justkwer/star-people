import { Burger, Logo, Navigation } from '@/components';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';

const containerSx = {
  sx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export const Header = () => (
  <AppBar position="sticky">
    <Container {...containerSx}>
      <Logo />
      <Navigation />
      <Burger />
    </Container>
  </AppBar>
);
