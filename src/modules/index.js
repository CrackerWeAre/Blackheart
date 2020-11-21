import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from 'modules/loading';
import userAuth, { userAuthSaga } from 'modules/user/auth';
import adminAuth, { adminAuthSaga } from 'modules/admin/auth';

const rootReducer = combineReducers({
    loading,
    adminAuth,
    userAuth,
});

export function* rootSaga() {
    yield all([userAuthSaga(), adminAuthSaga()]);
}

export default rootReducer;