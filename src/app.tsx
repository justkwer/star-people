import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@components';
import { PathsToPage } from '@core/constants';
import { ErrorPage, MainPage, PersonPage } from '@pages';
import { useDispatch, useSelector } from 'react-redux';
import { getApiPeople } from '@store/reducers';
import { selectPeople } from '@store/selectors';

export const App = () => {
  const { people } = useSelector(selectPeople);
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
