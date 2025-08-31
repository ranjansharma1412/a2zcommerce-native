import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from './APIUrls';

// Define your base URL(s). For a production app, use environment variables.
const API_TIMEOUT = 10000; // 10 seconds

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Add authentication token to every request
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Failed to get token from storage", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle global errors and format responses
apiClient.interceptors.response.use(
  (response) => {
    // Automatically format successful responses
    return {
      status: response.status,
      data: response.data,
      success: true,
    };
  },
  (error) => {
    const { response } = error;

    if (response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      const status = response.status;
      const data = response.data;

      // Centralized error handling based on status codes
      if (status === 401) {
        // Unauthorized: e.g., token expired or invalid
        // Log out user, redirect to login, or refresh token
        console.error('API Error: Unauthorized (401)', data);
        // Example: logoutUser();
      } else if (status === 404) {
        // Not Found: e.g., resource not found
        console.error('API Error: Not Found (404)', data);
      } else {
        // Handle other client or server errors
        console.error(`API Error: ${status}`, data);
      }

      // Return a structured error object
      return Promise.reject({
        success: false,
        status: status,
        message: data.message || 'An error occurred.',
        data: data,
      });

    } else if (error.request) {
      // The request was made but no response was received (e.g., network error)
      console.error('API Error: Network Error', error.message);
      return Promise.reject({
        success: false,
        message: 'Network error. Please check your connection.',
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Error: Request Setup Failed', error.message);
      return Promise.reject({
        success: false,
        message: 'Request setup failed.',
      });
    }
  }
);

export default apiClient;
