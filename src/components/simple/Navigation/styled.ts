export const navigationSx = (onBurger?: boolean) => ({
  flexDirection: onBurger ? 'column' : 'flex',
  display: onBurger ? { xs: 'flex', md: 'none' } : { xs: 'none', md: 'flex' },
  gap: '20px',
});
