import Client from './api';

// Sign in a user
export const SignInUser = async (data) => {
    console.log(data);
    const res = await Client.post('/auth/login', data);
    console.log('Full response:', res);

    // Assuming the response includes both user data and tokens
    const { user, token, refresh } = res.data;

    // Store tokens in local storage
    localStorage.setItem('token', token);
    localStorage.setItem('refresh', refresh); // Store refresh token

    console.log('Token in Local Storage:', localStorage.getItem('token'));
    console.log(res.data);

    // Return user data and tokens
    return { user, token, refresh };
};

// Register a user
export const RegisterUser = async (data) => {
    const res = await Client.post('/auth/register', data);
    return res.data;
};

// Check session
export const CheckSession = async () => {
    // Checks if the current token, if it exists, is valid
    const res = await Client.get('/auth/session');
    return res.data;
};

// Refresh token functionality
export const RefreshToken = async () => {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) {
        throw new Error('No refresh token available');
    }

    const res = await Client.post('/auth/token/refresh', { refresh });
    const newToken = res.data.token; // Assuming the new token is returned in this format

    localStorage.setItem('token', newToken);
    console.log('New token stored:', newToken);

    return newToken;
};

// Fetch with auth
export const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token');

    const headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`, // Corrected template literal
    };

    const response = await Client.fetch(url, {
        ...options,
        headers,
    });

    // Check if the response indicates an expired token and refresh if necessary
    if (response.status === 401) {
        // Token might be expired; try refreshing it
        try {
            const newToken = await RefreshToken();
            headers['Authorization'] = `Bearer ${newToken}`; // Corrected template literal

            // Retry the original request with the new token
            const retryResponse = await Client.fetch(url, {
                ...options,
                headers,
            });
            return retryResponse; // Return the retried response
        } catch (error) {
            console.error('Error refreshing token:', error);
            throw error; // Rethrow the error if refreshing fails
        }
    }

    return response; // Return the original response if no issues
};
