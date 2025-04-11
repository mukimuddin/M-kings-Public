import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useSpring, animated } from '@react-spring/web';

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 200,
  });

  return (
    <div className="space-y-8">
      <animated.div style={fadeIn}>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome back, {user?.name}!
        </p>
      </animated.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <animated.div
          style={slideUp}
          className="card"
        >
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
              <p className="font-medium">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <button className="btn btn-secondary w-full">Edit Profile</button>
          </div>
        </animated.div>

        {/* Analytics Card */}
        <animated.div
          style={slideUp}
          className="card"
        >
          <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Visits</p>
              <p className="font-medium">1,234</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Users</p>
              <p className="font-medium">567</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Conversion Rate</p>
              <p className="font-medium">45.8%</p>
            </div>
          </div>
        </animated.div>

        {/* Recent Activity */}
        <animated.div
          style={slideUp}
          className="card"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: 'Profile Updated',
                time: '2 hours ago',
                icon: '👤',
              },
              {
                action: 'New Login',
                time: '5 hours ago',
                icon: '🔐',
              },
              {
                action: 'Settings Changed',
                time: '1 day ago',
                icon: '⚙️',
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4"
              >
                <span className="text-2xl">{activity.icon}</span>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </div>

      {/* Quick Actions */}
      <animated.div
        style={slideUp}
        className="card"
      >
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: 'View Reports',
              icon: '📊',
              action: () => console.log('View Reports'),
            },
            {
              title: 'Manage Users',
              icon: '👥',
              action: () => console.log('Manage Users'),
            },
            {
              title: 'Settings',
              icon: '⚙️',
              action: () => console.log('Settings'),
            },
            {
              title: 'Help Center',
              icon: '❓',
              action: () => console.log('Help Center'),
            },
          ].map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl mb-2">{action.icon}</span>
              <span className="text-sm font-medium">{action.title}</span>
            </button>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Dashboard; 