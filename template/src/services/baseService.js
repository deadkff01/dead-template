import axios from 'axios';

export const baseService = (headerParams = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...headerParams,
  };
  return axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/`,
    maxRedirects: 0,
    headers,
  });
};
