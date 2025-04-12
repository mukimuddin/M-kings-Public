import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { socketService } from '../services/socket';
import {
  login,
  signup,
  logout,
  setError,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from '../store/slices/authSlice';
import authAPI from '../services/authAPI';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = useCallback(async (email: string, password: string) => {
    try {
      await dispatch(login({ email, password })).unwrap();
      socketService.connect();
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }, [dispatch]);

  const handleSignup = useCallback(async (name: string, email: string, password: string) => {
    try {
      await dispatch(signup({ name, email, password })).unwrap();
      socketService.connect();
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    socketService.disconnect();
  }, [dispatch]);

  const handleVerifyEmail = useCallback(async (token: string) => {
    try {
      await dispatch(verifyEmail(token)).unwrap();
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }, [dispatch]);

  const handleForgotPassword = useCallback(async (email: string) => {
    try {
      await dispatch(forgotPassword(email)).unwrap();
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }, [dispatch]);

  const handleResetPassword = useCallback(async (token: string, password: string) => {
    try {
      await dispatch(resetPassword({ token, password })).unwrap();
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }, [dispatch]);

  const clearError = useCallback(() => {
    dispatch(setError(null));
  }, [dispatch]);

  const handleClearError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleVerifyEmailAPI = async (token: string) => {
    try {
      const response = await authAPI.verifyEmail(token);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Email verification failed'));
      throw err;
    }
  };

  const handleForgotPasswordAPI = async (email: string) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Password reset request failed'));
      throw err;
    }
  };

  const handleResetPasswordAPI = async (token: string, password: string) => {
    try {
      const response = await authAPI.resetPassword(token, password);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Password reset failed'));
      throw err;
    }
  };

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
    clearError: handleClearError,
    verifyEmailAPI: handleVerifyEmailAPI,
    forgotPasswordAPI: handleForgotPasswordAPI,
    resetPasswordAPI: handleResetPasswordAPI,
  };
}; 