import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { login, logout, signup, setError } from '../store/slices/authSlice';
import authAPI from '../services/authAPI';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);

  const handleSignup = async (userData: { name: string; email: string; password: string }) => {
    try {
      const response = await authAPI.signup(userData);
      dispatch(signup(response));
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'An error occurred during signup'));
      throw err;
    }
  };

  const handleLogin = async (credentials: { email: string; password: string }) => {
    try {
      const response = await authAPI.login(credentials);
      dispatch(login(response));
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'An error occurred during login'));
      throw err;
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      dispatch(logout());
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'An error occurred during logout'));
      throw err;
    }
  };

  const handleVerifyEmail = async (token: string) => {
    try {
      const response = await authAPI.verifyEmail(token);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'An error occurred during email verification'));
      throw err;
    }
  };

  const handleForgotPassword = async (email: string) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'An error occurred during password reset request'));
      throw err;
    }
  };

  const handleResetPassword = async (token: string, newPassword: string) => {
    try {
      const response = await authAPI.resetPassword(token, newPassword);
      return response;
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'An error occurred during password reset'));
      throw err;
    }
  };

  return {
    user,
    token,
    loading,
    error,
    signup: handleSignup,
    login: handleLogin,
    logout: handleLogout,
    verifyEmail: handleVerifyEmail,
    forgotPassword: handleForgotPassword,
    resetPassword: handleResetPassword,
  };
}; 