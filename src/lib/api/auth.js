import apis from 'lib/api/api';
import qs from 'qs';

export const login = ({ email, password }) => apis({
    url: '/user/login',
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'uPW': password })
});

export const join = ({ email, password, username, agree }) => apis({
    url: '/user/create',
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'uPW': password, 'uName': username, 'uAgree': agree })
});

export const logout = () => apis.post('/user/logout');

// 이메일 중복확인
export const checkExist = email => apis({
    url: '/user/checkExist',
    headers: { 'content-type': 'multipart/form-data' },
    params: { 'uEmail': email },
});