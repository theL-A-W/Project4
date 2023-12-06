// userContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define initial state shape
const initialState = {
  user: localStorage.getItem('user') || '',
  token: localStorage.getItem('token') || '',
};

// Define actions for updating the state
const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'LOGOUT':
      return { user: '', token: '' };
    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// Create context provider
const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  // Save state to localStorage on changes
  useEffect(() => {
    localStorage.setItem('user', userState.user);
    localStorage.setItem('token', userState.token);
  }, [userState]);

  // Define actions to update the state
  const setUser = (user) => dispatch({ type: 'SET_USER', payload: user });
  const setToken = (token) => dispatch({ type: 'SET_TOKEN', payload: token });
  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <UserContext.Provider value={{ userState, setUser, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume the context
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
