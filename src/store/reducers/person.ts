import { MyPerson, PersonState, UpdatePersonAction } from '@/core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PersonState = {
  edit: false,
  error: false,
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, { payload }: PayloadAction<MyPerson>) => {
      state.person = payload;
    },
    changeEdit: (state, { payload }: PayloadAction<boolean>) => {
      state.edit = payload;
    },
    changeError: (state, { payload }: PayloadAction<boolean>) => {
      state.error = payload;
    },
    updatePerson: (state, { payload }: PayloadAction<UpdatePersonAction>) => {
      Object.assign(state.person || {}, payload);
    },
  },
});

export const { addPerson, updatePerson, changeEdit, changeError } =
  personSlice.actions;
export const person = personSlice.reducer;
