import React, { createContext, useContext, useState } from 'react';

// Define initial state
const initialUserState = {
  user: '',
  token: '',
};

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState(initialUserState);

  const setUser = (username, token) => {
    setUserState({ username, token });
  };

  const logout = () => {
    setUserState(initialUserState);
  };

  return (
    <UserContext.Provider value={{ userState, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a hook to access the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
