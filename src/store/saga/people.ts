import { call, put } from 'redux-saga/effects';
import {
  addPeople,
  toggleLoading,
  toggleError,
  addPages,
} from '@store/reducers';
import { PeopleResponse } from '@/core/types';
import { AxiosResponse } from 'axios';
import { api } from '@/core/api';
import { API_PAGE, API_SEARCH } from '@/core/constants';

export function* addPeopleWorker(action: { payload: number }) {
  try {
    yield put(toggleError(false));
    yield put(toggleLoading(true));
    const { data }: AxiosResponse<PeopleResponse> = yield call(
      api.get,
      `${API_PAGE}${action.payload}`,
    );
    yield put(addPeople(data.results));
    yield put(addPages(data.count));
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleError(true));
    yield put(toggleLoading(false));
  }
}

export function* searchPeopleWorker(action: { payload: string }) {
  try {
    yield put(toggleError(false));
    yield put(toggleLoading(true));
    const { data }: AxiosResponse<PeopleResponse> = yield call(
      api.get,
      `${API_SEARCH}${action.payload}`,
    );
    yield put(addPeople(data.results));
    yield put(addPages(data.count));
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleError(true));
    yield put(toggleLoading(false));
  }
}
