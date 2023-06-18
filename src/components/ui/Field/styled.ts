export const fieldSx = {
  textField: {
    required: true,
  },
  typography: {
    display: 'flex',
    gap: '10px',
  },
  sx: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
};

export const fieldName = {
  ...fieldSx.sx,
  alignSelf: 'center',
  fontSize: '22px',
};
