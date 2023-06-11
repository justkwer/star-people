import { call, put } from 'redux-saga/effects';
import { addPeople, toggleLoading } from '@store/reducers';
import { PeopleResponse } from '@/core/types';
import { AxiosResponse } from 'axios';
import { api } from '@/core/api';
import { apiPeople } from '@/core/constants/constants';

export function* addPeopleWorker() {
  try {
    const { data }: AxiosResponse<PeopleResponse> = yield call(
      api.get,
      apiPeople,
    );
    yield put(addPeople(data.results));
  } catch {
    yield put(toggleLoading(false));
  }
}
