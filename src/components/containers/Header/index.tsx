import { Burger, Logo, Navigation } from '@/components';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import { headerSx } from './styled.ts';

export const Header = () => (
  <AppBar position="sticky">
    <Container sx={headerSx}>
      <Logo />
      <Navigation />
      <Burger />
    </Container>
  </AppBar>
);
