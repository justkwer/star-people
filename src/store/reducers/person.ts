import { Person, PersonState, UpdatePersonAction } from '@/core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PersonState = {
  person: undefined,
  edit: false,
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.person = action.payload;
    },
    changeEdit: (state, action: PayloadAction<boolean>) => {
      state.edit = action.payload;
    },
    updatePerson: (state, action: PayloadAction<UpdatePersonAction>) => {
      state.person = { ...state.person, ...action.payload };
    },
  },
});

export const { addPerson, updatePerson, changeEdit } = personSlice.actions;
export const person = personSlice.reducer;
