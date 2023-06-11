import { Cards, Empty } from '@/components';
import { searchInput, emptyTitle } from '@/core/constants';
import { useAppSelector } from '@/core/hooks';
import { searchRegExp } from '@/core/utils';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useMemo, useState } from 'react';

export const MainPage = () => {
  const { people, loading } = useAppSelector((state) => state.people);
  const [value, setValue] = useState<string>('');
  const [activePage, setActivePage] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value.trim());

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) =>
    setActivePage(page);

  const searchedJobs = useMemo(
    () =>
      value !== searchInput
        ? people?.filter((person) => person.name.match(searchRegExp(value)))
        : people,
    [value, people],
  );

  const jobsLength = searchedJobs?.length ?? 3;
  const lastCountry = activePage * 4;
  const firstCountry = lastCountry - 4;

  return (
    <Container>
      <TextField
        id="search"
        label={searchInput}
        fullWidth
        value={value}
        onChange={handleChange}
        type="search"
        variant="filled"
      />
      {loading ? (
        <CircularProgress />
      ) : searchedJobs ? (
        searchedJobs.length === 0 ? (
          <Empty title={emptyTitle[0]} />
        ) : (
          <>
            <Cards cards={searchedJobs.slice(firstCountry, lastCountry)} />
            <Pagination
              page={activePage}
              count={Math.ceil(jobsLength / 4)}
              onChange={handlePageChange}
            />
          </>
        )
      ) : (
        <Empty title={emptyTitle[1]} />
      )}
    </Container>
  );
};
