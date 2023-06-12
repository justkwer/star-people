export type FieldSx = {
  required?: boolean;
  id?: string;
  label?: string;
  variant?: string;
  gutterBottom?: boolean;
  textAlign?: string;
  display?: string;
  gap?: string;
};

export type FieldProp = {
  name: [FieldSx, FieldSx];
  gender: [FieldSx, FieldSx];
  ['birth_year']: [FieldSx, FieldSx];
  height: [FieldSx, FieldSx];
  mass: [FieldSx, FieldSx];
};

export const fieldSx: FieldProp = {
  name: [
    {
      required: true,
      variant: 'filled',
    },
    { variant: 'h5', textAlign: 'center' },
  ],
  gender: [
    {
      required: true,
      variant: 'filled',
    },
    {
      variant: 'h6',
      display: 'flex',
      gap: '10px',
    },
  ],
  ['birth_year']: [
    {
      required: true,
      variant: 'filled',
    },
    {
      variant: 'h6',
      display: 'flex',
      gap: '10px',
    },
  ],
  height: [
    {
      required: true,
      variant: 'filled',
    },
    {
      variant: 'h6',
      display: 'flex',
      gap: '10px',
    },
  ],
  mass: [
    {
      required: true,
      variant: 'filled',
    },
    {
      variant: 'h6',
      display: 'flex',
      gap: '10px',
    },
  ],
};
