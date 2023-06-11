import { useAppSelector } from '@/core/hooks';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fab, CircularProgress } from '@mui/material';
import { PeopleCard } from '@/components';
import { useDispatch } from 'react-redux';
import { toggleEdit } from '@/store/reducers';
import { Person } from '@/core/types';

export const PersonPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { people } = useAppSelector((state) => state.people);
  const [person, setPerson] = useState<Person | null>(null);
  const { edit } = useAppSelector((state) => state.person);

  useEffect(() => {
    if (people) {
      setPerson(people.find((el) => el.name === name) ?? null);
    }
  }, [people, name]);

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
