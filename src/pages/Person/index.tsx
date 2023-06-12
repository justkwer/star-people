import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fab, CircularProgress } from '@mui/material';
import { PeopleCard } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEdit } from '@/store/reducers';
import { Person } from '@/core/types';
import { selectPeople } from '@/store/selectors';

export const PersonPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { people, edit } = useSelector(selectPeople);
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    if (people) {
      setPerson(people.find((el) => el.id === name) ?? null);
    }
  }, [people, person, name]);

  const handleClick = () => {
    dispatch(toggleEdit(!edit));
  };

  return (
    <Container>
      {person ? (
        <>
          <Fab onClick={handleClick}>{edit ? <DoneIcon /> : <EditIcon />}</Fab>
          <PeopleCard {...person} click={true} />
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};
