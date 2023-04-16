import { takeLatest } from "redux-saga/effects";
import { handlerGetUser} from "./handlers/seriesHandler";
import { getSeries } from "../ducks/seriesSlice";

export function* watcherSaga() {
    yield takeLatest(getSeries.type,handlerGetUser);
}