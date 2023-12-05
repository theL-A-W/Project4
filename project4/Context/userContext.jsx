import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    user: '',
    token: '',
  });

  const setUser = (username, token) => {
    setUserState({ username, token });
  };


  const logout = () => {
    setUserState({
      user: '',
      token: '',
    });
  };

  return (
    <UserContext.Provider value={{ userState, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
