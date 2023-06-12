export const cardContentSx = {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export const fabSx = (click?: boolean) => ({
  sx: {
    display: click ? 'flex' : 'none',
    marginLeft: 'auto',
    marginRight: '15px',
    marginBottom: '15px',
  },
});
