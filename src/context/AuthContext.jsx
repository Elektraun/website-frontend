// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { authAPI } from '../services/api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state ONCE on mount - never repeat
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('AuthContext: Starting initialization...');
        const currentUser = await authAPI.getCurrentUser();
        console.log('AuthContext: getCurrentUser response:', currentUser);

        if (currentUser && currentUser.id) {
          console.log('AuthContext: User authenticated, setting state. User ID:', currentUser.id);
          setUser(currentUser);
          setIsAuthenticated(true);
        } else {
          console.log('AuthContext: No user found');
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('AuthContext: Error initializing auth:', err);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        console.log('AuthContext: Initialization complete, setting loading=false');
        setLoading(false);
      }
    };

    initializeAuth();
  }, []); // Empty array = runs ONCE on mount only

  const register = useCallback(async (email, password, name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authAPI.register(email, password, name);
      // Signup creates the account but doesn't authenticate—user must log in
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authAPI.login(email, password);
      if (response && response.id) {
        setUser(response);
        setIsAuthenticated(true);
        return response;
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await authAPI.logout();
      setUser(null);
      setIsAuthenticated(false);
    } catch (err) {
      console.error('Logout error:', err);
      // Clear local state even if logout request fails
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    user,
    isAuthenticated,
    loading,
    error,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
