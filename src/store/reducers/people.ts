import { GET_API_PEOPLE } from '@/core/constants';
import { People, PeopleState } from '@/core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PeopleState = {
  people: undefined,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state, action: PayloadAction<People[]>) => ({
      ...state,
      people: action.payload,
    }),
  },
});

export const { addPeople } = peopleSlice.actions;
export const getApiPeople = () => ({ type: GET_API_PEOPLE });
export const people = peopleSlice.reducer;