import { API_URL } from '@core/constants';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_URL,
});
