import apis from 'lib/api/api';

export const adminLogin = ({ email, password }) => apis.post('', { email, password });

export const adminJoin = ({ email, password, username, }) =>  apis.post('', { email, password, username, });

export const adminLogout = () => apis.post('');