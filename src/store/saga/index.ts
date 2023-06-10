import { GET_API_PEOPLE } from '@/core/constants';
import { takeEvery } from 'redux-saga/effects';
import { addPeopleWorker } from '@store/saga/people';

export function* rootSaga() {
  yield takeEvery(GET_API_PEOPLE, addPeopleWorker);
}
