import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from 'modules/loading';
import auth, { AuthSaga } from 'modules/auth';
import userinfo from 'module/userinfo'

const rootReducer = combineReducers({
    loading,
    auth,
    userinfo
});

export function* rootSaga() {
    yield all([AuthSaga()]);
}

export default rootReducer;