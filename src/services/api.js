import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gestaocontratual.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
