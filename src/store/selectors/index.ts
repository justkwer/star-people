import { RootState } from '@store';

export const selectPerson = (state: RootState) => state.person;
export const selectPeople = (state: RootState) => state.people;
