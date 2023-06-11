import { GET_API_PEOPLE } from '@/core/constants';
import { People, PeopleState, UpdatePersonAction } from '@/core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PeopleState = {
  people: undefined,
  loading: true,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state, action: PayloadAction<People[]>) => ({
      ...state,
      people: action.payload.map((el) => ({ ...el, id: el.name })),
      loading: false,
    }),
    toggleLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
    updatePerson: (state, action: PayloadAction<UpdatePersonAction>) => ({
      ...state,
      people: state.people?.map((person) =>
        person.id === action.payload.id
          ? { ...person, ...action.payload }
          : person,
      ),
    }),
  },
});

export const { addPeople, toggleLoading, updatePerson } = peopleSlice.actions;
export const getApiPeople = () => ({ type: GET_API_PEOPLE });
export const people = peopleSlice.reducer;
