import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { PeopleCard } from '@/components';
import { useSelector } from 'react-redux';
import { selectPeople, selectPerson } from '@/store/selectors';
import { useDispatch } from 'react-redux';
import { addPerson } from '@/store/reducers';

export const PersonPage = () => {
  const { name } = useParams();
  const { people } = useSelector(selectPeople);
  const { person } = useSelector(selectPerson);
  const dispatch = useDispatch();

  useEffect(() => {
    if (people) {
      const newPerson = people.find((el) => el.id === name);

      if (newPerson) {
        dispatch(addPerson(newPerson));
      }
    }
  }, [dispatch, people, person, name]);

  return (
    <Container>
      {person ? <PeopleCard {...person} click={true} /> : <CircularProgress />}
    </Container>
  );
};
