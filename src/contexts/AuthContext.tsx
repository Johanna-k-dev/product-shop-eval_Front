import React, {createContext, useState, useContext, ReactNode, useEffect} from 'react';
import {AuthContextType} from "../@type/app";



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return !!localStorage.getItem("token");
    });
    const [user, setUser] = useState<string | null>(() => {
        return localStorage.getItem("user");
    });

    const login = (userName: string) => {
        setIsAuthenticated(true);
        setUser(userName);
        localStorage.setItem("user", userName);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
    };

    const forceLogout = () => {
        alert("Session expirée ou accès refusé");
        logout();
        window.location.href = "/user-connection";
    }

    useEffect(() => {
        const expirationTime = Date.now() + 1000 * 60 * 60;
        localStorage.setItem("token_expiration", expirationTime.toString());
        const checkToken = () => {
            const token = localStorage.getItem("token");
            if (!token) {
                logout();
            }
        };
        const interval = setInterval(checkToken, 20000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, user, login, logout, forceLogout}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth doit être utilisé dans un AuthProvider");
    }
    return context;
};