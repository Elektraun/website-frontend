// src/pages/LoginPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 pt-32">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Login</h1>
            <p className="text-gray-400">Enter your credentials to continue</p>
          </div>

          <LoginForm />

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-center">
              Don't have an account?{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-white font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
