import { configureStore } from '@reduxjs/toolkit';
import { people, person } from '@store/reducers';

export const store = configureStore({
  reducer: {
    people,
    person,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
