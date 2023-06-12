import { call, put } from 'redux-saga/effects';
import { addPeople, toggleLoading } from '@store/reducers';
import { PeopleResponse } from '@/core/types';
import { AxiosResponse } from 'axios';
import { api } from '@/core/api';
import { apiPage, apiSearch } from '@/core/constants';

export function* addPeopleWorker(action: { payload: number }) {
  try {
    yield put(toggleLoading(true));
    const { data }: AxiosResponse<PeopleResponse> = yield call(
      api.get,
      `${apiPage}${action.payload}`,
    );
    yield put(addPeople(data.results));
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleLoading(false));
  }
}

export function* searchPeopleWorker(action: { payload: string }) {
  try {
    yield put(toggleLoading(true));
    const { data }: AxiosResponse<PeopleResponse> = yield call(
      api.get,
      `${apiSearch}${action.payload}`,
    );
    yield put(addPeople(data.results));
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleLoading(false));
  }
}
