// 리덕스 모듈 => 액션/액션 생성함수/리듀서
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
// eslint-disable-next-line
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from 'lib/createRequestSaga';
import * as authAPI from 'lib/api/userinfo';

// 액션 타입
const CHANGE_FIELD = 'userinfo/CHANGE_FIELD';
const INITIALIZE_FORM = 'userinfo/INITIALIZE_FORM';


const [CART, CART_SUCCESS, CART_FAILURE] = createRequestActionTypes('userinfo/CART');
const [COUPON, COUPON_SUCCESS, COUPON_FAILURE] = createRequestActionTypes('userinfo/COUPON');
const [MILEAGE, MILEAGE_SUCCESS, MILEAGE_FAILURE] = createRequestActionTypes('userinfo/MILEAGE');

// eslint-disable-next-line
const TEMP_SET_USER = 'userinfo/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// eslint-disable-next-line
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('userinfo/CHECK');

// 액션 생성함수
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form, // join, login
    key, // username, email, password 등
    value, // 실제 바꾸려는 값
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // join, login
// eslint-disable-next-line
export const cart = createAction(CART, ({email, token}) => ({
    email, token
}));
// eslint-disable-next-line
export const coupon = createAction(COUPON, ({}) => ({

}));
// eslint-disable-next-line
export const mileage = createAction(MILEAGE, ({}) => ({

}));

// 사가 생성
const cartSaga = createRequestSaga(CART, authAPI.cart);
const couponSaga = createRequestSaga(COUPON, authAPI.coupon);
const mileagesaga = createRequestSaga(MILEAGE, authAPI.mileage);

// function* logoutSaga() {
//     try {
//         yield call(authAPI.logout);
//     } catch (e) {
//         console.log(e);
//     }
// }

export function* AuthSaga() {
    yield takeLatest(CART, cartSaga);
    yield takeLatest(COUPON, couponSaga);
    yield takeLatest(MILEAGE, mileagesaga);
}

const initialState = {
    cart : {
        list: []
    },
    favortie : {
        list: []
    },
    coupon: {
        list: []
    },
    mileage: null,
    infoError: null,
}

const userinfo = handleActions(
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
        [CART_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            userError: null,
        }),
        // 회원가입 실패
        [CART_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        // 로그인 성공
        [COUPON_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            userError: null,
        }),
        // 로그인 실패
        [COUPON_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        // 로그아웃
        [MILEAGE_SUCCESS]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        [MILEAGE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
    },
    initialState,
);

export default userinfo;