import { GET_API_PEOPLE } from '@/core/constants';
import { People, PeopleState, Person } from '@/core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PeopleState = {
  people: undefined,
  loading: false,
  searchText: undefined,
  page: 1,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state, action: PayloadAction<People[]>) => {
      state.people = action.payload.map((el) => ({ ...el, id: el.name }));
    },
    pageTransfer: (state, action: PayloadAction<number>) => ({
      ...state,
    }),
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    searchTransfer: (state, action: PayloadAction<string>) => ({
      ...state,
    }),
    updatePoeple: (state, action: PayloadAction<Person>) => {
      state.people = state.people?.map((person) =>
        person.id === action.payload.id ? action.payload : person,
      );
    },
  },
});

export const {
  addPeople,
  toggleLoading,
  updatePoeple,
  pageTransfer,
  changePage,
  searchTransfer,
} = peopleSlice.actions;
export const getApiPeople = () => ({ type: GET_API_PEOPLE });
export const people = peopleSlice.reducer;
