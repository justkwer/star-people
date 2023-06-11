import { GET_API_PERSON } from '@/core/constants';
import { PersonState } from '@/core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PersonState = {
  edit: false,
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    toggleEdit: (state, action: PayloadAction<boolean>) => ({
      ...state,
      edit: action.payload,
    }),
  },
});

export const { toggleEdit } = personSlice.actions;
export const getApiPerson = () => ({ type: GET_API_PERSON });
export const person = personSlice.reducer;
