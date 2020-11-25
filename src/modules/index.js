import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from 'modules/loading';
import auth, { AuthSaga } from 'modules/auth';

const rootReducer = combineReducers({
    loading,
    auth,
});

export function* rootSaga() {
    yield all([AuthSaga()]);
}

export default rootReducer;