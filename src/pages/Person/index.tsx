import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Card } from '@/components';
import { selectPeople, selectPerson } from '@/store/selectors';
import { addPerson, changeEdit } from '@/store/reducers';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { PathsToPage } from '@/core/constants';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import { personSize, personSx } from '@/pages/Person/styled.ts';

export const PersonPage = () => {
  const { name } = useParams();
  const { people } = useAppSelector(selectPeople);
  const { person, edit } = useAppSelector(selectPerson);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (people && !edit) {
      const newPerson = people.find((el) => el.id === name);

      if (newPerson) {
        dispatch(addPerson(newPerson));
      }
    }
  }, [dispatch, people, person, name, edit]);

  useEffect(
    () => () => {
      dispatch(changeEdit(false));
    },
    [dispatch],
  );

  return (
    <Container sx={personSx}>
      {person ? (
        <Card {...person} click={true} />
      ) : (
        <Box sx={personSize}>
          Please
          <Link
            component={RouterLink}
            to={PathsToPage.Main}
            href={PathsToPage.Main}
            underline="hover"
            variant="button"
            sx={personSize}
          >
            {' pick '}
          </Link>
          a character
        </Box>
      )}
    </Container>
  );
};
