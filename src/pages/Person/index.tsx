import { useAppSelector } from '@/core/hooks';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fab, CircularProgress } from '@mui/material';
import { Empty, PeopleCard } from '@/components';
import { addPeople } from '@/store/reducers/people';
import { useDispatch } from 'react-redux';
import { People } from '@/core/types';
import { emptyTitle } from '@/core/constants';

export const PersonPage = () => {
  const { name } = useParams();
  const { people } = useAppSelector((state) => state.people);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [person, setPerson] = useState<People | null>(null);

  useEffect(() => {
    if (people) {
      const findedPerson = people.find((el) => el.name === name);
      if (findedPerson) return setPerson(findedPerson);
      setError(true);
    }
  }, [people, name]);

  const handleClick = () => {
    if (!edit) return setEdit(true);

    if (people) {
      const newPeople = people.map((el) => {
        const res = { ...el };
        if (res.name === 'R2-D2') res.name = 'valera';
        return res;
      });
      dispatch(addPeople(newPeople));
      setEdit(false);
    }
  };

  return (
    <Container>
      {error ? (
        <Empty title={emptyTitle[1]}></Empty>
      ) : person ? (
        <>
          <Fab onClick={handleClick}>{edit ? <DoneIcon /> : <EditIcon />}</Fab>
          <PeopleCard {...person} edit={edit} setPerson={setPerson} />
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};
