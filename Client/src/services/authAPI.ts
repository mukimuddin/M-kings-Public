import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const authAPI = {
  signup: async (userData: { name: string; email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response;
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response;
  },

  logout: async () => {
    const response = await axios.post(`${API_URL}/auth/logout`);
    return response.data;
  },

  verifyEmail: async (token: string) => {
    const response = await axios.post(`${API_URL}/auth/verify-email`, { token });
    return response;
  },

  forgotPassword: async (email: string) => {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
    return response;
  },

  resetPassword: async (token: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/reset-password`, { token, password });
    return response;
  },
};

export default authAPI; 