// src/components/account/AccountDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { stravaAPI } from '../../services/api';

export const AccountDashboard = () => {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [stravaStatus, setStravaStatus] = useState(null);
  const [stravaLoading, setStravaLoading] = useState(true);
  const [error, setError] = useState('');

  console.log('AccountDashboard render:', { isAuthenticated, loading, user });

  // useEffect(() => {
  //   const fetchStravaStatus = async () => {
  //     try {
  //       const status = await stravaAPI.getStatus();
  //       setStravaStatus(status);
  //     } catch (err) {
  //       setError('Failed to load Strava status');
  //     } finally {
  //       setStravaLoading(false);
  //     }
  //   };

  //   if (user && isAuthenticated) {
  //     fetchStravaStatus();
  //   }
  // }, [user, isAuthenticated]);

  if (loading) {
    console.log('AccountDashboard: Still loading auth');
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    console.log('AccountDashboard: Not authenticated, redirecting to login', { isAuthenticated, user });
    navigate('/login');
    return null;
  }

  console.log('AccountDashboard: Rendering account dashboard for user:', user.id);

  const handleConnectStrava = () => {
    window.location.href = 'http://localhost:8080/api/v1/strava/connect';
  };

  const handleDisconnectStrava = async () => {
    if (window.confirm('Are you sure you want to disconnect Strava?')) {
      try {
        await stravaAPI.disconnect();
        setStravaStatus({ connected: false });
      } catch (err) {
        setError('Failed to disconnect Strava');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      setError('Failed to logout');
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Account</h1>
            <p className="text-gray-400">Manage your Elektraun profile</p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400">Email</label>
                <p className="text-white">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-400">Name</label>
                <p className="text-white">{user.name}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-4">Strava Connection</h2>
            {loading ? (
              <p className="text-gray-400">Loading...</p>
            ) : (
              <div className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500 rounded text-red-300 text-sm">
                    {error}
                  </div>
                )}
                {stravaStatus?.connected ? (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-green-400">Connected</span>
                    </div>
                    <button
                      onClick={handleDisconnectStrava}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-all"
                    >
                      Disconnect Strava
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span className="text-gray-400">Not connected</span>
                    </div>
                    <button
                      onClick={handleConnectStrava}
                      className="px-4 py-2 bg-cyan-400 text-gray-900 font-bold rounded-md hover:bg-white transition-all"
                    >
                      Connect Strava
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="border-t border-gray-700 pt-6">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
