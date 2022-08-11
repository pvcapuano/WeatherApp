import { combineReducers } from "redux";

import { tempReducer as temp } from "./temp/reducer";

export const rootReducer = combineReducers({
  temp,
});
