// 리덕스 모듈 => 액션/액션 생성함수/리듀서
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
// eslint-disable-next-line
import { takeLatest, call } from 'redux-saga/effects';
import createTempRequestSaga, { createRequestActionTypes } from 'lib/createRequestSaga';
import * as userAPI from 'lib/api/userinfo';

// 액션 타입
const CHANGE_FIELD = 'userinfo/CHANGE_FIELD';
const INITIALIZE_FORM = 'userinfo/INITIALIZE_FORM';


const [CART, CART_SUCCESS, CART_FAILURE] = createRequestActionTypes(
    'userinfo/CART'
);

const [REVIEW, REVIEW_SUCCESS, REVIEW_FAILURE]  = createRequestActionTypes(
    'userinfo/REVIEW'
);

const [COUPON, COUPON_SUCCESS, COUPON_FAILURE] = createRequestActionTypes(
    'userinfo/COUPON'
);
const [MILEAGE, MILEAGE_SUCCESS, MILEAGE_FAILURE] = createRequestActionTypes(
    'userinfo/MILEAGE'
);
const [INFOGET, INFOGET_SUCCESS, INFOGET_FAILURE] = createRequestActionTypes(
    'userinfo/INFOGET'
);

const [INFOUPDATE, INFOUPDATE_SUCCESS, INFOUPDATE_FAILURE] = createRequestActionTypes(
    'userinfo/INFOUPDATE'
);

// 액션 생성함수
export const changeField = createAction(
    CHANGE_FIELD, 
    ({ form, key, value }) => ({
    form, // join, login
    key, // username, email, password 등
    value, // 실제 바꾸려는 값
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // join, login
// eslint-disable-next-line
export const cart = createAction(CART, ({uID, token}) => ({
    uID, token
}));
// eslint-disable-next-line
export const coupon = createAction(COUPON, ({}) => ({

}));
// eslint-disable-next-line
export const mileage = createAction(MILEAGE, ({}) => ({

}));

export const infoget = createAction(INFOGET, ({email, token}) => ({
    email, token
}));

export const infoUpdate = createAction(INFOUPDATE, ({userid, email, token, address, post, phone, birth})=>({userid, email, token, address, post, phone, birth}))

export const reviewGet = createAction(REVIEW, ({uID, token}) => ({
    uID, token
}))
// 사가 생성
const cartSaga = createTempRequestSaga(CART, userAPI.cart);
const couponSaga = createTempRequestSaga(COUPON, userAPI.coupon);
const mileagesaga = createTempRequestSaga(MILEAGE, userAPI.mileage);
const infogetsaga = createTempRequestSaga(INFOGET, userAPI.userInfo);
const infoupdatesaga = createTempRequestSaga(INFOUPDATE, userAPI.userInfoUpdate);
const reviewgetsaga = createTempRequestSaga(REVIEW, userAPI.reviewGet);

export function* UserinfoSaga() {
    yield takeLatest(CART, cartSaga);
    yield takeLatest(COUPON, couponSaga);
    yield takeLatest(MILEAGE, mileagesaga);
    yield takeLatest(INFOGET, infogetsaga);
    yield takeLatest(INFOUPDATE, infoupdatesaga);
    yield takeLatest(REVIEW, reviewgetsaga)
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
    review: {
        list: []
    },
    mileage: null,
    infoError: null,
    authMessage: null,
    mystatus: {
        uid: '',
        email: '',
        emailsite: '',
        birthyear: '',
        birthmonth: '',
        birthday: '',
        username: '',
        phonefirstnum: '',
        phonemiddlenum: '',
        phonelastnum: '',
        address: ''
      },
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
        [CART_SUCCESS]: (state, { payload: user }) => (
            produce(state, draft => {
            draft["cart"]['list'] = user?.result; // payload의 result값을 state.review.list에 대입
            })
        ),
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
        [MILEAGE_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            userError: null,
        }),
        [MILEAGE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        [INFOGET_SUCCESS]: (state, { payload: user } )  => ({
            ...state,
            mystatus : {
                uid: user.result?.uID,
                email: user.result?.uEmail?.split('@')[0],
                emailsite: user.result?.uEmail?.split('@')[1],
                birthyear: user.result?.uBirth?.split('-')[0],
                birthmonth: user.result?.uBirth?.split('-')[1],
                birthday: user.result?.uBirth?.split('-')[2],
                username: user.result?.uName,
                phonefirstnum: user.result?.uPhone.slice(0,3),
                phonemiddlenum: user.result?.uPhone.slice(3,7),
                phonelastnum: user.result?.uPhone.slice(7,11),
                address: user.result?.uAddr,
            },
        }),
        [INFOGET_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        [INFOUPDATE_SUCCESS]: (state, { payload: user } )  => ({
            ...state,
        }),
        [INFOUPDATE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
        [REVIEW_SUCCESS]: (state, { payload: user } )  => 
            produce(state, draft => {
                console.log(draft);
                draft["review"]["list"] = user?.result; // payload의 result값을 state.review.list에 대입
        }),
    
        [REVIEW_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error,
        }),
    },
    initialState,
);

export default userinfo;