import { takeEvery } from 'redux-saga/effects';
import { addPeopleWorker, searchPeopleWorker } from '@store/saga/people';
import { pageTransfer, searchTransfer } from '../reducers';

export function* rootSaga() {
  yield takeEvery(pageTransfer, addPeopleWorker);
  yield takeEvery(searchTransfer, searchPeopleWorker);
}
