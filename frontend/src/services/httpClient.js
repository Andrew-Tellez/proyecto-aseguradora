import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  validateStatus: () => true,
});