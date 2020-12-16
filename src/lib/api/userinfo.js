import apis from 'lib/api/api';
import qs from 'qs';

export const cart = ({email, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'token': token}),
    url: '/'
});

export const coupon = ({email, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'token': token}),
    url: '/'
});

export const mileage = ({email, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'token': token}),
    url: '/'
});

export const userInfo = ({email, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    params: { 'uEmail': email, 'token': token},
    url: '/user/detail'
});

export const userInfoUpdate = ({userid, email, token, name, gender, address, post, phone, birth}) => apis({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({'uID':userid, 'uEmail': email, 'token': token, 'uName' : name,"uGender" : gender, "uAddr" : address, "uPost" : post, "uPhone" : phone, "uBirth": birth}),
    url: '/user/update'
});

export const userOrder = ({id, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'multipart/form-data' },
    params: { 'uID': id, 'token': token},
    url: '/order/list'
});

export const userReview = ({email, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'token': token}),
    url: '/comment/list'
});