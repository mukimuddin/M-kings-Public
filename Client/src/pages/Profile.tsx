import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <p className="mt-1 text-lg text-gray-900 dark:text-white">{user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <p className="mt-1 text-lg text-gray-900 dark:text-white">{user?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
            <p className="mt-1 text-lg text-gray-900 dark:text-white capitalize">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 