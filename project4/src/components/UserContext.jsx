import React, { createContext, useContext, useState } from 'react';

// Create a UserContext
const UserContext = createContext();

// Create a UserProvider component
export const UserProvider = ({ children }) => {
    const [userState, setUserState] = useState({ username: '', token: '', refresh: '' });

    // Function to set user state
    const setUser = (user) => {
        setUserState(user);
    };

    return (
        <UserContext.Provider value={{ userState, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};
