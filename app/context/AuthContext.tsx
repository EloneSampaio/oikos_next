"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Tipos do contexto
interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Criação do contexto
const AuthContext = createContext<AuthContextProps | null>(null);

// Provedor do contexto
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token: string) => {
    const expirationTime = Date.now() + 5 * 60 * 60 * 1000; // 5 horas em milissegundos
    const tokenData = JSON.stringify({ token, expiration: expirationTime });
  
    localStorage.setItem("accessToken", tokenData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const tokenData = localStorage.getItem("accessToken");
  
    if (tokenData) {
      const { token, expiration } = JSON.parse(tokenData);
  
      if (Date.now() < expiration) {
        setIsAuthenticated(true);
      } else {
        logout(); // Token expirado
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
