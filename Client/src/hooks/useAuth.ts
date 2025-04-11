import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  login,
  loginSuccess,
  loginFailure,
  signup,
  signupSuccess,
  signupFailure,
  logout,
  setError,
} from '../store/slices/authSlice';
import authAPI from '../services/authAPI';
import { socketService } from '../services/socket';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = useCallback(async (email: string, password: string) => {
    try {
      await dispatch(login({ email, password })).unwrap();
      socketService.connect();
    } catch (error: any) {
      dispatch(setError(error.message));
      throw error;
    }
  }, [dispatch]);

  const handleSignup = useCallback(async (name: string, email: string, password: string) => {
    try {
      await dispatch(signup({ name, email, password })).unwrap();
      socketService.connect();
    } catch (error: any) {
      dispatch(setError(error.message));
      throw error;
    }
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    socketService.disconnect();
    dispatch(logout());
  }, [dispatch]);

  const handleVerifyEmail = async (token: string) => {
    try {
      const response = await authAPI.verifyEmail(token);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Email verification failed'));
      throw err;
    }
  };

  const handleForgotPassword = async (email: string) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Password reset request failed'));
      throw err;
    }
  };

  const handleResetPassword = async (token: string, password: string) => {
    try {
      const response = await authAPI.resetPassword(token, password);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Password reset failed'));
      throw err;
    }
  };

  const clearError = useCallback(() => {
    dispatch(setError(null));
  }, [dispatch]);

  return {
    user,
    token,
    loading,
    error,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
    verifyEmail: handleVerifyEmail,
    forgotPassword: handleForgotPassword,
    resetPassword: handleResetPassword,
    clearError,
    isAuthenticated: !!token,
  };
}; 