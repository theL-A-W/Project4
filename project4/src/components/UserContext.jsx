import React, { createContext, useContext, useState } from 'react';

// Create UserContext
const UserContext = createContext();

// UserProvider component
export const UserProvider = ({ children }) => {
    const [userState, setUserState] = useState({}); // Initialize state

    const setUser = (user) => {
        setUserState(user);
    };

    const signOut = () => {
        setUserState({}); // Clear user state
        localStorage.removeItem('user'); // Remove user data from local storage
        localStorage.removeItem('token'); // Optional: remove token
        localStorage.removeItem('refresh'); // Optional: remove refresh token
    };

    return (
        <UserContext.Provider value={{ userState, setUser, signOut }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use UserContext
export const useUser = () => {
    return useContext(UserContext);
};
