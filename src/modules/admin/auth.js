// Admin 리덕스 모듈 => 액션/액션 생성함수/리듀서
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from 'lib/createRequestSaga';
import * as adminAuthApi from 'lib/api/admin/AdminAuth';

// 액션
const TEMP_SET_ADMIN = 'user/TEMP_SET_ADMIN';
const CHANGE_FIELD = 'admin/CHANGE_FIELD';
const INITIALIZE_FORM = 'admin/INITIALIZE_FORM';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('admin/CHECK');
const [ADMINJOIN, ADMINJOIN_SUCCESS, ADMINJOIN_FAILURE] = createRequestActionTypes('admin/ADMINJOIN');
const [ADMINLOGIN, ADMINLOGIN_SUCCESS, ADMINLOGIN_FAILURE] = createRequestActionTypes('admin/ADMINLOGIN');
const ADMINLOGOUT = 'admin/ADMINLOGOUT';

// 액션 생성함수
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form, // join, login
    key, // username, email, password 등
    value, // 실제 바꾸려는 값
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // join, login

export const join = createAction(ADMINJOIN, ({ username, email, password }) => ({
    email,
    password,
    username,
}));

export const login = createAction(ADMINLOGIN, ({ email, password }) => ({
    email,
    password,
}));

export const adminLogout = createAction(ADMINLOGOUT);

// 사가 생성
const adminJoinSaga = createRequestSaga(ADMINJOIN, adminAuthApi.adminJoin);
const adminLoginSaga = createRequestSaga(ADMINLOGIN, adminAuthApi.adminLogin);

function* adminLogoutSaga() {
    try {
        yield call(adminAuthApi.adminLogout);
    } catch (e) {
        console.log(e);
    }
}

export function* adminAuthSaga() {
    yield takeLatest(ADMINJOIN, adminJoinSaga);
    yield takeLatest(ADMINLOGIN, adminLoginSaga);
    yield takeLatest(ADMINLOGOUT, adminLogoutSaga);
}

const initialState = {
    join: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    login: {
        email: '',
        password: '',
    },
    admin: null,
    adminError: null,
}

const admin = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value }}) => {
            produce(state, draft => {
                draft[form][key] = value
            })
        },
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            adminError: null, // 폼 전환시 회원 인증 에러 초기화
        }),
        [ADMINJOIN_SUCCESS]: (state, { payload: admin }) => ({
            ...state,
            admin,
            adminError: null,
        }),
        [ADMINJOIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            adminError: error,
        }),
        [ADMINLOGIN_SUCCESS]: (state, { payload: admin }) => ({
            ...state,
            admin,
            adminError: null,
        }),
        [ADMINLOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            adminError: error,
        }),
        [ADMINLOGOUT]: state => ({
            ...state,
            admin: null,
        })
    },
    initialState,
);

export default admin;