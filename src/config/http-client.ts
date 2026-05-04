import axios from 'axios';
import { baseUrl } from './api';

const apiKey = import.meta.env.VITE_KINOPOISK_API_KEY;

export const httpClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'X-API-KEY': apiKey,
    'Content-Type': 'application/json',
  }
});

export const get = httpClient.get;
