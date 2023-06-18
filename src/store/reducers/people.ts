import { MyPerson, PeopleState } from '@/core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPeople } from '@store/api';

const initialState: PeopleState = {
  loading: false,
  error: false,
  page: 1,
  pages: 1,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    toggleLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    updatePeople: (state, { payload }: PayloadAction<MyPerson>) => {
      state.people = state.people?.map((person) =>
        person.id === payload.id ? payload : person,
      );
    },
    toggleError: (state, { payload }: PayloadAction<boolean>) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPeople.pending, (state) => {
      if (!state.error) state.error = false;
      state.loading = true;
    });
    builder.addCase(getPeople.fulfilled, (state, { payload }) => {
      state.people = payload.results.map((el) => ({ ...el, id: el.name }));
      state.pages = payload.count;
      state.loading = false;
    });
    builder.addCase(getPeople.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { updatePeople, changePage } = peopleSlice.actions;
export const people = peopleSlice.reducer;
