import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { Navigation } from '@components';

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{ display: { xs: 'block', md: 'none' }, gap: '20px' }}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClick}>
        <Navigation onBurger={true} />
      </Drawer>
    </>
  );
};
