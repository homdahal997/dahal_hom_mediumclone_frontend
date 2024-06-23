// Define the base URL for your API
const USERS_URL = 'http://localhost:3000/users';

// Login function
export const login = async (data) => {
    try {
        const response = await fetch(`${USERS_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Login failed');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

// Register function
export const register = async (data) => {
    try {
        const response = await fetch(`${USERS_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Registration failed');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

// Logout function
export const logout = async () => {
    try {
        const response = await fetch(`${USERS_URL}/logout`, {
            method: 'POST',
        });
        if (!response.ok) throw new Error('Logout failed');
        return 'Logged out successfully';
    } catch (error) {
        console.error(error);
    }
};
