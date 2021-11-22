import axios from 'axios';

const URL = 'http://localhost:4001';
// https://mirabackend.herokuapp.com

const createHeaders = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

function postSignUp(body) {
  const promise = axios.post(`${URL}/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${URL}/sign-in`, body);
  return promise;
}

function getUserPlan(token) {
  const promise = axios.get(`${URL}/plan`, createHeaders(token));
  return promise;
}

function postPlan(body) {
  const promise = axios.post(`${URL}/plan`, body);
  return promise;
}

export {
  postSignUp,
  postLogin,
  getUserPlan,
  postPlan,
};
