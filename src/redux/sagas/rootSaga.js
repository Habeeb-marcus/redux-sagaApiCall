import { takeLatest } from "redux-saga/effects";
import { handlerGetUser } from "./handlers/user";
import { GET_USER } from "../Ducks/user";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handlerGetUser);
}
