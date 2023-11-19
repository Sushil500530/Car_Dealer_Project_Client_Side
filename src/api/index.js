import axios from 'axios'
import { clearCookie } from './auth';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// interceptor response for check response 
axiosSecure?.interceptors?.response?.use(response => response, async (error) => {
  console.log('error track interceptors', error);
  if(error?.response && (error?.response?.status === 401 || error?.response?.status === 403)){
    await clearCookie();
    return window.location.replace('/login')
  }
  return Promise.reject(error)
})

export default axiosSecure
