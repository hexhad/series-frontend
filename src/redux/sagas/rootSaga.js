import { takeLatest } from "redux-saga/effects";
import { handlerGetUser} from "./handlers/seriesHandler";
import { handlerCelebrity} from "./handlers/handleCelebrity";
import { getSeries } from "../ducks/seriesSlice";
import { getCelebrity } from "../ducks/celebritySlice";

export function* watcherSaga() {
    yield takeLatest(getSeries.type,handlerGetUser);
    yield takeLatest(getCelebrity.type,handlerCelebrity);
}