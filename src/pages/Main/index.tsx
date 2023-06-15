import { Cards, Empty } from '@/components';
import { EMPTY_TITLE, SEARCH_INPUT } from '@/core/constants';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { selectPeople } from '@store/selectors';
import { changePage } from '@/store/reducers/people';
import { useAppDispatch, useAppSelector, useDebounce } from '@/core/hooks';
import { containerSx, paginationSx, textField } from './styled';
import { getPeople } from '@store/api';
import Pagination from '@mui/material/Pagination';

export const MainPage = () => {
  const { people, loading, page, error, pages } = useAppSelector(selectPeople);
  const [searchText, setSearchText] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const totalPages = useMemo(() => Math.ceil(pages / 10) ?? 1, [pages]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  const searchDebounce = useDebounce(searchText ?? '', 1000);

  const handlePageChange = (_event: ChangeEvent<unknown>, newPage: number) => {
    dispatch(changePage(newPage));
    dispatch(getPeople(newPage));
  };

  useEffect(() => {
    if (!people) {
      dispatch(getPeople(page));
    }
  }, [dispatch, page, people]);

  useEffect(() => {
    if (searchDebounce !== '') {
      dispatch(getPeople(searchDebounce));
      return;
    }

    if (searchDebounce === '' && searchText !== null) {
      dispatch(getPeople(page));
    }
  }, [dispatch, page, searchDebounce]);

  return (
    <Container sx={containerSx}>
      <TextField
        label={SEARCH_INPUT}
        value={searchText ?? ''}
        onChange={handleChange}
        sx={textField}
        fullWidth={true}
      />
      {loading && <CircularProgress />}
      {people &&
        !loading &&
        (people.length === 0 ? (
          <Empty title={EMPTY_TITLE.notFound} />
        ) : (
          <Cards cards={people} />
        ))}
      {people && (
        <Pagination
          sx={paginationSx}
          page={page}
          count={totalPages}
          onChange={handlePageChange}
        />
      )}
      {error && <Empty title={EMPTY_TITLE.error} />}
    </Container>
  );
};
