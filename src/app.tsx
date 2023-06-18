import { Route, Routes } from 'react-router-dom';
import { Header } from '@components';
import { PathsToPage } from '@core/constants';
import { ErrorPage, MainPage, PersonPage } from '@pages';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path={PathsToPage.Main} element={<MainPage />} />
      <Route path={PathsToPage.Person} element={<PersonPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);
