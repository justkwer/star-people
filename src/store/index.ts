import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { people, person } from '@store/reducers';
import { rootSaga } from '@store/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    people,
    person,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
