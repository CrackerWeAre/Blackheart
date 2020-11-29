import apis from 'lib/api/api';
import qs from 'qs';

export const login = ({ email, password }) => apis.post('/user/login', { email, password });

export const join = ({ email, password, username }) => apis({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ 'uEmail': email, 'uPW': password, 'uName': username }),
    url: '/user/create'
});

export const logout = () => apis.post('');