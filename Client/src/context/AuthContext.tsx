import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  signup: (userData: { name: string; email: string; password: string }) => Promise<any>;
  login: (credentials: { email: string; password: string }) => Promise<any>;
  logout: () => void;
  verifyEmail: (token: string) => Promise<any>;
  forgotPassword: (email: string) => Promise<any>;
  resetPassword: (token: string, password: string) => Promise<any>;
  setError: (error: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth();

  const authContext: AuthContextType = {
    user: auth.user,
    token: auth.token,
    loading: auth.loading,
    error: auth.error,
    signup: auth.signup,
    login: auth.login,
    logout: auth.logout,
    verifyEmail: auth.verifyEmail,
    forgotPassword: auth.forgotPassword,
    resetPassword: auth.resetPassword,
    setError: auth.setError,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
}; 