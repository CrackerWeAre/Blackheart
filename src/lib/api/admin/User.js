import apis from 'lib/api/api';

export const userDiscoverAPI = ({ page, maxResult }) =>
  apis.get(
    `http://blackheart.sparker.kr:8080/user/list?page=${page}&maxResult=${maxResult}`
  );
