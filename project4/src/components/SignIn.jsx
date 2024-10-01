import { useState } from 'react';
import { SignInUser } from './services/Auth';
import { useUser } from '../components/UserContext';
import Register from './Register';

export default function SignIn() {
    const { setUser } = useUser();  // useUser from context to set user
    const [show, setShow] = useState(true);
    const [formValues, setFormValues] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState(null);  // Track login errors

    const handleClose = () => {
        setShow(false);
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = await SignInUser(formValues);
            console.log('Response from server:', payload);

            if (payload && payload.user && payload.token) {
                console.log('Logged in successfully:', payload);
                setFormValues({ username: '', password: '' });

                // Store user data and tokens in localStorage
                const user = { username: payload.user.username, token: payload.token, refresh: payload.refresh };
                localStorage.setItem('user', JSON.stringify(user));

                // Set the user object in context
                setUser(user);  // Pass entire user object here, instead of splitting arguments
                handleClose();
            } else {
                setLoginError('Login failed. Invalid credentials or incomplete payload.');
                console.log('Login failed. Payload is undefined or incomplete.');
            }
        } catch (error) {
            setLoginError('Error during login. Please try again.');
            console.log('Error during login:', error);
        }
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ${show ? '' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
                <button className="text-right text-gray-500 hover:text-gray-800 mb-4" onClick={handleClose}>&times;</button>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={formValues.username}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formValues.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Dont have an account?</p>
                        <Register />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={!formValues.username || !formValues.password}
                            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
