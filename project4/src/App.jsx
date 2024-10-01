import { useEffect } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import { useUser } from './components/UserContext'; // Use useUser from context
import Main from './components/Main';
import SignIn from './components/SignIn';

function App() {
    const { userState, setUser } = useUser(); // Access user context state

    useEffect(() => {
        // Log the current user state to debug if it's updating correctly
        console.log('Current userState:', userState);

        // Check if there's already a userState set, avoid redundant updates
        if (!userState.token) {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    console.log('Parsed user from localStorage:', parsedUser);

                    // Ensure the token is accessed directly from the parsed user
                    if (parsedUser && parsedUser.token) {
                        console.log('Valid token found. Setting user state.');
                        setUser(parsedUser); // Restore user from localStorage into UserContext
                    } else {
                        console.warn('No valid token found in parsed user');
                    }
                } catch (error) {
                    console.error('Error parsing stored user:', error);
                }
            } else {
                console.warn('No user data found in localStorage');
            }
        }
    }, [userState.token, setUser]); // Only run when userState.token or setUser changes

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {!userState.token ? (
                    <SignIn /> // Show SignIn if not authenticated
                ) : (
                    <Main /> // Show the main app content if the user is authenticated
                )}
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-50">
                <Navigation />
            </div>
        </div>
    );
}

export default App;
