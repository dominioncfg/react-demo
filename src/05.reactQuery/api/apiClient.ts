import axios, { type CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: 'https://localhost:7227/api',
};
const usersApiClient = axios.create(axiosConfig);

export { usersApiClient };
