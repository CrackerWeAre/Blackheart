import apis from 'lib/api/api';

export const productDiscoverAPI = ({page, maxResult}) =>
  apis.get(`https://blackheart.sparker.kr:8080/product/list?page=${page}&maxResult=${maxResult}`);

export const productDeleteAPI = ({ pID }) =>
  apis.get(`https://blackheart.sparker.kr:8080/product/delete?pID=${pID}`);
