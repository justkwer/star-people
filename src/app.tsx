import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@containers';
import { PathsToPage } from '@core/constants';
import { ErrorPage, MainPage, PersonPage } from '@pages';
import { useAppSelector } from '@core/hooks';
import { useDispatch } from 'react-redux';
import { getApiPeople } from './store/reducers';

export const App = () => {
  const { people } = useAppSelector((state) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    if (people) return;
    dispatch(getApiPeople());
  }, [dispatch, people]);

  return (
    <Suspense fallback="Loading...">
      <Header />
      <Routes>
        <Route path={PathsToPage.Main} element={<MainPage />} />
        <Route path={PathsToPage.Person} element={<PersonPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
