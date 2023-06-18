import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { Navigation } from '@components';
import { iconSx } from '@/components/simple/Burger/styled.ts';

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <IconButton onClick={handleClick} sx={iconSx}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClick}>
        <Navigation onBurger={true} />
      </Drawer>
    </>
  );
};
