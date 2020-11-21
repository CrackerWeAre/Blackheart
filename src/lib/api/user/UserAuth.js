import apis from 'lib/api/api';

export const userLogin = ({ email, password }) => apis.post('', { email, password });

export const userJoin = ({ email, password, username, }) =>  apis.post('', { email, password, username, });

export const userLogout = () => apis.post('');