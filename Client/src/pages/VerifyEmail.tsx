import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail: React.FC = () => {
  const [verificationStatus, setVerificationStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axios.get(`/api/auth/verify-email/${token}`);
        setVerificationStatus('success');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } catch (error) {
        setVerificationStatus('error');
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Email Verification
        </h2>
        {verificationStatus === 'verifying' && (
          <p className="text-center text-gray-600 dark:text-gray-300">
            Verifying your email...
          </p>
        )}
        {verificationStatus === 'success' && (
          <p className="text-center text-green-600 dark:text-green-400">
            Email verified successfully! Redirecting to login...
          </p>
        )}
        {verificationStatus === 'error' && (
          <p className="text-center text-red-600 dark:text-red-400">
            Email verification failed. Please try again or contact support.
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail; 