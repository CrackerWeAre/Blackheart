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
    data: qs.stringify({ 'uEmail': email, 'token': token}),
    url: '/'
});

export const userInfoUpdate = ({userid, email, token, name, gender, address, post, phone, birth}) => apis({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({'uID':userid, 'uEmail': email, 'token': token, 'uName' : name,"uGender" : gender, "uAddr" : address, "uPost" : post, "uPhone" : phone, "uBirth": birth}),
    url: '/'
});

export const userOrder = ({email, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'token': token}),
    url: '/order/list'
});

export const userReview = ({email, token}) => apis({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'token': token}),
    url: '/comment/list'
});