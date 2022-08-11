import { all, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { loadDataSuccess, loadDataError } from "./actions";

const baseURL = "https://api.openweathermap.org/data/2.5/";

function* loadData() {
  try {
    const { data } = yield axios.get(
      `${baseURL}weather?q=Rio de Janeiro&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`
    );

    const { temp, temp_min, temp_max } = data.main;
    const icon = data.weather[0].icon;
    yield put(loadDataSuccess({ temp, temp_min, temp_max, icon }));
  } catch (error) {
    yield put(loadDataError());
  }
}

function* loadData2() {
  try {
    const { data } = yield axios.get(
      `${baseURL}weather?q=São Paulo&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`
    );

    const { temp, temp_min, temp_max } = data.main;
    const icon = data.weather[0].icon;
    yield put(loadDataSuccess({ temp, temp_min, temp_max, icon }));
  } catch (error) {
    yield put(loadDataError());
  }
}

function* loadData3() {
  try {
    const { data } = yield axios.get(
      `${baseURL}weather?q=Minas Gerais&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`
    );

    const { temp, temp_min, temp_max } = data.main;
    const icon = data.weather[0].icon;
    yield put(loadDataSuccess({ temp, temp_min, temp_max, icon }));
  } catch (error) {
    yield put(loadDataError());
  }
}

export default all([
  takeLatest("@temp/LOAD_DATA_REQUEST", loadData),
  takeLatest("@temp/LOAD_DATA_REQUEST2", loadData2),
  takeLatest("@temp/LOAD_DATA_REQUEST3", loadData3),
]);
