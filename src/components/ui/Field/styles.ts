export type FieldSx = {
  required?: boolean;
  variant?: string;
  textAlign?: string;
  display?: string;
  gap?: string;
  textOverflow?: string;
  overflow?: string;
  whiteSpace?: string;
};

export const fieldSx: FieldSx[] = [
  {
    required: true,
    variant: 'filled',
  },

  {
    variant: 'h5',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  {
    variant: 'h6',
    display: 'flex',
    gap: '10px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
];

export const boxSx = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};
