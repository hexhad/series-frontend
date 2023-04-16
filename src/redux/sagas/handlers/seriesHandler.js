import { call,put } from "redux-saga/effects";
import { setSeries } from "../../ducks/seriesSlice";
import { requestGetSeries } from "../requests/series";

export function* handlerGetUser(action) {
    // console.log(action.payload);
    try {
        const response = yield call(requestGetSeries);
        yield put(setSeries([...response]))
    } catch (error) {
        console.log(error);
    }
    
}