import axios from 'axios';
// import { Message } from 'antd';

const serivce = axios.creacte({
    baseURL: '',
    timeout: 50000,
});
 

serivce.interceptors.request.use(config => config,
 error => Promise.reject(error));
serivce.interceptors.response.use(response => response, error => Promise.reject(error));

export default serivce;
