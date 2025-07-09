// UserContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User } from '@/types/user';
// import { users as mockUsers } from '@/data/MockUsers'; // Si lo usas para validación

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback((userData: User) => {
    setUserState(userData);
    if (typeof window !== 'undefined') {
      // *** NUEVO CONSOLE.LOG AQUÍ ***
      console.log("🚀 ~ UserContext ~ userData que se va a guardar en la cookie:", userData);
      try {
          const userJson = JSON.stringify(userData);
          console.log("🚀 ~ UserContext ~ JSON serializado para la cookie:", userJson);
          document.cookie = `user=${encodeURIComponent(userJson)}; path=/; max-age=${60 * 60 * 24 * 7}`;
          console.log("🚀 ~ UserContext ~ Cookie guardada. Valor actual de document.cookie:", document.cookie);
      } catch (e) {
          console.error("❌ Error al serializar userData para la cookie:", e, "UserData:", userData);
      }
    }
  }, []);

  const logout = useCallback(() => {
    setUserState(null);
    if (typeof window !== 'undefined') {
      document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const cookieString = document.cookie;
    console.log("🔄 UserContext useEffect - Leyendo cookie. document.cookie:", cookieString);
    const userCookie = cookieString.split('; ').find(row => row.startsWith('user='));

    if (userCookie) {
      try {
        const value = decodeURIComponent(userCookie.split('=')[1]);
        const parsedUser: User = JSON.parse(value);
        console.log("✅ UserContext useEffect - Cookie parseada. Usuario:", parsedUser);
        setUserState(parsedUser);
      } catch (error) {
        console.error('❌ UserContext useEffect - Error al parsear cookie:', error);
        logout();
      }
    } else {
        console.log("🤷‍♀️ UserContext useEffect - No se encontró la cookie 'user'.");
    }

    setIsLoading(false);
  }, [logout]);

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context as UserContextType; // Añadida la aserción de tipo por el error anterior
};