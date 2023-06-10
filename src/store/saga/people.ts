import { call, put } from 'redux-saga/effects';
import { addPeople } from '@store/reducers';
import { People } from '@/core/types';
import { AxiosResponse } from 'axios';
import { api } from '@/core/api';

export function* addPeopleWorker() {
  try {
    const { data }: AxiosResponse<People[]> = yield call(api.get, '/people');

    yield put(addPeople(data));
  } catch {
    console.log('error');
  }
}
