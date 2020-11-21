// User 리덕스 모듈 => 액션/액션 생성함수/리듀서
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from 'lib/createRequestSaga';
import * as userAuthApi from 'lib/api/user/UserAuth';

// 액션
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const CHANGE_FIELD = 'user/CHANGE_FIELD';
const INITIALIZE_FORM = 'user/INITIALIZE_FORM';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');
const [USERJOIN, USERJOIN_SUCCESS, USERJOIN_FAILURE] = createRequestActionTypes('user/USERJOIN');
const [USERLOGIN, USERLOGIN_SUCCESS, USERLOGIN_FAILURE] = createRequestActionTypes('user/USERLOGIN');
const USERLOGOUT = 'user/USERLOGOUT';


// 액션 생성함수
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form, // join, login
    key, // username, email, password 등
    value, // 실제 바꾸려는 값
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // join, login

export const join = createAction(USERJOIN, ({ username, email, password }) => ({
    email,
    password,
    username,
}));

export const login = createAction(USERLOGIN, ({ email, password }) => ({
    email,
    password,
}));

export const userLogout = createAction(USERLOGOUT);

// 사가 생성
const userJoinSaga = createRequestSaga(USERJOIN, userAuthApi.userJoin);
const userLoginSaga = createRequestSaga(USERLOGIN, userAuthApi.userLogin);

function* userLogoutSaga() {
    try {
        yield call(userAuthApi.userLogout);
    } catch (e) {
        console.log(e);
    }
}

export function* userAuthSaga() {
    yield takeLatest(USERJOIN, userJoinSaga);
    yield takeLatest(USERLOGIN, userLoginSaga);
    yield takeLatest(USERLOGOUT, userLogoutSaga);
}

const initialState = {
    join: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    login: {
        email: '',
        password: '',
    },
    user: null,
    userError: null,
}

const user = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value }}) => {
            produce(state, draft => {
                draft[form][key] = value
            })
        },
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            userError: null, // 폼 전환시 회원 인증 에러 초기화
        }),
        [USERJOIN_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            userError: null,
        }),
        [USERJOIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        [USERLOGIN_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            userError: null,
        }),
        [USERLOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        [USERLOGOUT]: state => ({
            ...state,
            user: null,
        })
    },
    initialState,
);

export default user;