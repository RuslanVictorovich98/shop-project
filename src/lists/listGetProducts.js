import { call, put, takeLatest } from 'redux-saga/effects'// const {put, call} = ReduxSaga.effects;
import {FETCH_USERS_REQUEST} from './listActions';
import { create } from './listActionsCreator';

export function* fetchUser() {
  const url = 'http://localhost:3000/data.json';
  try {
    const data = yield call(() => {
              return fetch(url)
                      .then(res => res.json())
              })
    yield put (create(data.products));
  } catch (error) {
    console.error('fetchUsers return erros: ' + error);
  }        
 }
 
 export default function* GetProduct() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUser);
  }
