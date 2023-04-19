import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import seriesReducer from "./ducks/seriesSlice";
import celebrityReducer from "./ducks/celebritySlice";
import {watcherSaga} from "./sagas/rootSaga";

const reducer = combineReducers({
  series: seriesReducer,
  celebrity:celebrityReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
