export const cardGridSx = { width: '300px' };

export const cardContentSx = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export const cardFabSx = (click?: boolean) => ({
  display: click ? 'flex' : 'none',
  marginLeft: 'auto',
  marginRight: '15px',
  marginBottom: '15px',
});
