import { RootState } from '@store';

export const selectPeople = (state: RootState) => state.people;
export const selectPerson = (state: RootState) => state.person;
