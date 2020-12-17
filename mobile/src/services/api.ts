import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.107:3333',
});

// http://192.168.0.107:4356
// http://10.0.2.2:4356
// http://localhost:4356

export default api;
