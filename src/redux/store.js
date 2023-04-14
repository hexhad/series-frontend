import { combineReducers, createStore } from "redux";
import seriesReducer from "./ducks";

const rootReducer = combineReducers({
  series: seriesReducer,
});

const store = createStore(rootReducer);

export default store;
