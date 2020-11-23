import apis from 'lib/api/api';

export const login = ({ email, password }) => apis.post('', { email, password });

export const join = ({ email, password, username, gender, phone, birth, agree, address }) =>  apis.post('', { email, password, username, gender, phone, birth, agree, address });

export const logout = () => apis.post('');