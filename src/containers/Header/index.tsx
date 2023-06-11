import { Burger, Logo, Navigation } from '@/components';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';

export const Header = () => (
  <AppBar position="static">
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Logo />
      <Navigation />
      <Burger />
    </Container>
  </AppBar>
);
