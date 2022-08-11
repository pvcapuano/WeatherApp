import { all } from "redux-saga/effects";

import temp from "./temp/sagas";

export default function* rootSaga() {
  return yield all([temp]);
}
