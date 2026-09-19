// src/pages/SignupPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 pt-32">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
            <p className="text-gray-400">Create your Elektraun account</p>
          </div>

          <SignupForm />

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-cyan-400 hover:text-white font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
