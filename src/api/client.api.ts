import axios from 'axios';
import {BASE_URL} from '@env';

export const client = axios.create({
  baseURL: BASE_URL,
});
