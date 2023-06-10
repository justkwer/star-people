import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@containers';
import { PathsToPage } from '@core/constants';
import { ErrorPage, MainPage, PersonPage } from '@pages';

export const App = () => (
  <Suspense fallback="Loading...">
    <Header />
    <Routes>
      <Route path={PathsToPage.Main} element={<MainPage />} />
      <Route path={PathsToPage.Person} element={<PersonPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Suspense>
);
