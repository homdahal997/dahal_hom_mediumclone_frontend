import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        return storedUserInfo ? JSON.parse(storedUserInfo) : null;
    });

    const setCredentials = (newUserInfo) => {
        setUserInfo(newUserInfo);
        localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    };

    const logout = () => {
        setUserInfo(null);
        localStorage.clear();
    };

    useEffect(() => {

    }, [userInfo]);

    return (
        <AuthContext.Provider value={{ userInfo, setCredentials, logout }}>
            {children}
        </AuthContext.Provider>
    );
};