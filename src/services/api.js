import axios from 'axios';
import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
