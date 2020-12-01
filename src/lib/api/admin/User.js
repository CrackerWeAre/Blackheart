import apis from 'lib/api/api';

export const userDiscoverAPI = ({ page, maxResult }) =>
  apis.get(
    `https://blackheart.sparker.kr:8080/user/list?page=${page}&maxResult=${maxResult}`
  );

export const userDeleteAPI = ({ uID }) => 
  apis.get(
    `https://blackheart.sparker.kr:8080/user/delete?uID=${uID}`
  );