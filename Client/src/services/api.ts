import axios from 'axios';
import { store } from '../store';
import { logout } from '../store/slices/authSlice';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/api/auth/login', credentials),
  
  signup: (userData: { name: string; email: string; password: string }) =>
    api.post('/api/auth/signup', userData),
  
  verifyEmail: (token: string) =>
    api.post('/api/auth/verify-email', { token }),
  
  forgotPassword: (email: string) =>
    api.post('/api/auth/forgot-password', { email }),
  
  resetPassword: (token: string, password: string) =>
    api.post('/api/auth/reset-password', { token, password }),
  
  logout: () =>
    api.post('/api/auth/logout'),
};

export const userApi = {
  getProfile: () =>
    api.get('/api/users/profile'),
  
  updateProfile: (data: { name?: string; email?: string }) =>
    api.patch('/api/users/profile', data),
  
  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.patch('/api/users/change-password', data),
};

export const chatApi = {
  getRooms: () =>
    api.get('/api/chat/rooms'),
  
  createRoom: (data: { name: string; participants: string[] }) =>
    api.post('/api/chat/rooms', data),
  
  getMessages: (roomId: string) =>
    api.get(`/api/chat/rooms/${roomId}/messages`),
  
  sendMessage: (roomId: string, content: string) =>
    api.post(`/api/chat/rooms/${roomId}/messages`, { content }),
};

export default api; 