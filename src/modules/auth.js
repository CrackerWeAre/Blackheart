// auth 리덕스 모듈
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from 'lib/createRequestSaga';
import * as authAPI from 'lib/api/auth';

/* 액션 타입 */
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes(
  'auth/JOIN',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);
const LOGOUT = 'user/LOGOUT';

const [ISEMAIL, ISEMAIL_SUCCESS, ISEMAIL_FAILURE] = createRequestActionTypes(
  'auth/ISEMAIL',
);

/* 액션 생성함수 */
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // join, login
    key, // username, email, password 등
    value, // 실제 바꾸려는 값
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // join, login

export const join = createAction(
  JOIN,
  ({ email, password, username, agree }) => ({
    email,
    password,
    username,
    agree,
  }),
);

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

export const logout = createAction(LOGOUT);

export const isEmail = createAction(ISEMAIL,  email => email);

/* 사가 생성 */
const joinSaga = createRequestSaga(JOIN, authAPI.join);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const isEmailSaga = createRequestSaga(ISEMAIL, authAPI.checkExist);

export function* AuthSaga() {
  yield takeLatest(JOIN, joinSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(ISEMAIL, isEmailSaga);
}

/* 초기 상태 */
const initialState = {
  join: {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    agree: 0,
  },
  login: {
    email: '',
    password: '',
  },
  currentUser: {
    uName: '',
    uEmail: '',
  },
  user: null,
  userError: null,
  status: null,
  authMessage: null,
};

/* 리듀서 함수 */
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
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
      authMessage: user.message, // "message": "유저가 생성되었습니다"
    }),
    // 회원가입 실패
    [JOIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      currentUser: {
        uName: user.result.token,
        uEmail: user.result.uEmail,
      },
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
    // 로그아웃
    [LOGOUT]: (state) => ({
      ...state,
      currentUser: null,
    }),
    [ISEMAIL_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      authMessage: user.message,
    }),
    [ISEMAIL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
  },
  initialState,
);

export default auth;
