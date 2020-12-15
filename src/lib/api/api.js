import axios from 'axios';

// axios 인스턴스 생성
const apis = axios.create({
    baseURL: "https://blackheart.sparker.kr:8080/"
});

export default apis;