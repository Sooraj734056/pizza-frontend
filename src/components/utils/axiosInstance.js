import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // use if working with cookies, optional for token
});

export default API;
