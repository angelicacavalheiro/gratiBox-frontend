import axios from 'axios';

const URL = 'http://localhost:4001';
// https://mirabackend.herokuapp.com

// const createHeaders = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

export default function postSignUp(body) {
  const promise = axios.post(`${URL}/sign-up`, body);
  return promise;
}
