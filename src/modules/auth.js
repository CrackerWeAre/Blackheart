// 리덕스 모듈 => 액션/액션 생성함수/리듀서
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from 'lib/createRequestSaga';
import * as authAPI from 'lib/api/auth';

// 액션 타입
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes('auth/JOIN');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const LOGOUT = 'auth/LOGOUT';
// eslint-disable-next-line
const TEMP_SET_USER = 'auth/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// eslint-disable-next-line
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('auth/CHECK');

// 액션 생성함수
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form, // join, login
    key, // username, email, password 등
    value, // 실제 바꾸려는 값
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // join, login

export const join = createAction(JOIN, ({ email, password, username }) => ({
    email, 
    password,
    username,
}));

export const login = createAction(LOGIN, ({ email, password }) => ({
    email,
    password,
}));

export const logout = createAction(LOGOUT);

// 사가 생성
const joinSaga = createRequestSaga(JOIN, authAPI.join);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

function* logoutSaga() {
    try {
        yield call(authAPI.logout);
    } catch (e) {
        console.log(e);
    }
}

export function* AuthSaga() {
    yield takeLatest(JOIN, joinSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    join: {
        email: '', 
        password: '',
        confirmPassword: '', 
        username: '', 
    },
    login: {
        email: '',
        password: '',
    },
    user: null,
    userError: null,
}

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => 
            produce(state, draft => {
                draft[form][key] = value; // state.join.username을 바꿈.
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            userError: null, // 폼 전환시 회원 인증 에러 초기화
        }),
        // 회원가입 성공
        [JOIN_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            userError: null,
        }),
        // 회원가입 실패
        [JOIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        // 로그인 성공
        [LOGIN_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            userError: null,
        }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        // 로그아웃
        [LOGOUT]: state => ({
            ...state,
            user: null,
        }),
    },
    initialState,
);

export default auth;