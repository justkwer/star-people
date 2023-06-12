import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PeopleCard } from '@/components';
import { useSelector } from 'react-redux';
import { selectPeople, selectPerson } from '@/store/selectors';
import { useDispatch } from 'react-redux';
import { addPerson, changeEdit } from '@/store/reducers';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { PathsToPage } from '@/core/constants';

const size = { sx: { fontSize: '20px' } };

export const PersonPage = () => {
  const { name } = useParams();
  const { people } = useSelector(selectPeople);
  const { person, edit } = useSelector(selectPerson);

  const dispatch = useDispatch();

  useEffect(() => {
    if (people && !edit) {
      const newPerson = people.find((el) => el.id === name);

      if (newPerson) {
        dispatch(addPerson(newPerson));
      }
    }
  }, [dispatch, people, person, name, edit]);

  useEffect(() => {
    return () => {
      dispatch(changeEdit(false));
    };
  }, [dispatch]);

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      {person ? (
        <PeopleCard {...person} click={true} />
      ) : (
        <Box {...size}>
          Please
          <Link
            component={RouterLink}
            to={PathsToPage.Main}
            href={PathsToPage.Main}
            underline="hover"
            variant="button"
            {...size}
          >
            {' pick '}
          </Link>
          a character
        </Box>
      )}
    </Container>
  );
};
