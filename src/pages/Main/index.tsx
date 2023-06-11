import { Cards, Empty } from '@/components';
import { searchInput, emptyTitle } from '@/core/constants';
import { searchRegExp } from '@/core/utils';
import { selectPeople } from '@/store/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const MainPage = () => {
  const { people, loading } = useSelector(selectPeople);
  const [value, setValue] = useState<string>('');
  const [activePage, setActivePage] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value.trim());

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) =>
    setActivePage(page);

  const searchedPerson = useMemo(
    () =>
      value !== searchInput
        ? people?.filter((person) => person.name.match(searchRegExp(value)))
        : people,
    [value, people],
  );

  const personLength = useMemo(
    () => searchedPerson?.length ?? 3,
    [searchedPerson],
  );
  const lastPerson = useMemo(() => activePage * 4, [activePage]);
  const firstPerson = useMemo(() => lastPerson - 4, [lastPerson]);
  const count = useMemo(() => Math.ceil(personLength / 4), [personLength]);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : searchedPerson ? (
        searchedPerson.length === 0 ? (
          <Empty title={emptyTitle[0]} />
        ) : (
          <>
            <TextField
              id="search"
              label={searchInput}
              fullWidth
              value={value}
              onChange={handleChange}
              type="search"
              variant="filled"
            />
            <Cards cards={searchedPerson.slice(firstPerson, lastPerson)} />
            <Pagination
              page={activePage}
              count={count}
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
