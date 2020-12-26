import { combineReducers } from "redux";

import search from "./search";
import reproduces from "./play-video";

const rootReducer = combineReducers({
  search,
  reproduces,
});

export default rootReducer;
