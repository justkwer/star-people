export type FieldSx = {
  required?: boolean;
  id?: string;
  label?: string;
  variant?: string;
  gutterBottom?: boolean;
  textAlign?: string;
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
      label: 'Required',
      variant: 'filled',
    },
    { variant: 'h5', textAlign: 'center' },
  ],
  gender: [
    {
      required: true,
      label: 'Required',
      variant: 'filled',
    },
    {
      variant: 'h6',
    },
  ],
  ['birth_year']: [
    {
      required: true,
      label: 'Required',
      variant: 'filled',
    },
    {
      variant: 'h6',
    },
  ],
  height: [
    {
      required: true,
      label: 'Required',
      variant: 'filled',
    },
    {
      variant: 'h6',
    },
  ],
  mass: [
    {
      required: true,
      label: 'Required',
      variant: 'filled',
    },
    {
      variant: 'h6',
    },
  ],
};
