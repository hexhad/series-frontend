import { call,put } from "redux-saga/effects";
import { setCelebrity } from "../../ducks/celebritySlice";
import { celeb } from "../requests/celeb";

export function* handlerCelebrity(action) {
    // console.log(action.payload);
    try {
        const response = yield call(celeb,action.payload);
        yield put(setCelebrity({...response}))
    } catch (error) {
        console.log(error);
    }
    
}