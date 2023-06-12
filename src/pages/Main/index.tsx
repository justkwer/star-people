import { Cards, Empty } from '@/components';
import { searchInput, emptyTitle } from '@/core/constants';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageTransfer } from '@store/reducers';
import { selectPeople } from '@store/selectors';
import { changePage, searchTransfer } from '@/store/reducers/people';
import { useDebounce } from '@/core/hooks';

export const MainPage = () => {
  const { people, loading, page } = useSelector(selectPeople);
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  const searchDebounce = useDebounce(searchText, 1000);

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    dispatch(changePage(newPage));
    dispatch(pageTransfer(newPage));
  };

  useEffect(() => {
    if (!people) dispatch(pageTransfer(page));
  }, [dispatch, page, people]);

  useEffect(() => {
    if (searchDebounce !== '') {
      dispatch(searchTransfer(searchDebounce));
    }
  }, [searchDebounce, dispatch]);

  return (
    <Container>
      <TextField
        id="search"
        label={searchInput}
        fullWidth
        value={searchText}
        onChange={handleChange}
        type="search"
        variant="filled"
      />
      {loading ? (
        <CircularProgress />
      ) : people ? (
        people.length === 0 ? (
          <Empty title={emptyTitle[0]} />
        ) : (
          <>
            <Cards cards={people} />
            <Pagination page={page} count={9} onChange={handlePageChange} />
          </>
        )
      ) : (
        <Empty title={emptyTitle[1]} />
      )}
    </Container>
  );
};
