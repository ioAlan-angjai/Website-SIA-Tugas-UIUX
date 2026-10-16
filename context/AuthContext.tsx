'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { studentData, demoAuthCredentials } from '@/lib/mockData';
import { StudentProfile } from '@/types/academic';

interface AuthContextType {
  isAuthenticated: boolean;
  user: StudentProfile | null;
  login: (nim: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'sia_usd_demo_auth_session';

function getInitialAuth(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) !== 'false';
  } catch {
    return true;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getInitialAuth);
  const [user, setUser] = useState<StudentProfile | null>(() =>
    getInitialAuth() ? studentData : null
  );
  const [isLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/login') {
      router.push('/login');
    }
  }, [isAuthenticated, pathname, router]);

  const login = async (nim: string, pass: string): Promise<{ success: boolean; message?: string }> => {
    // Simulasi delay autentikasi frontend
    await new Promise((res) => setTimeout(res, 350));

    const validNim =
      nim.trim() === demoAuthCredentials.nim ||
      nim.trim().toLowerCase() === demoAuthCredentials.username;
    const validPass =
      pass === demoAuthCredentials.passwordHint ||
      pass === 'demo' ||
      pass === '123456';

    if (validNim && validPass) {
      setIsAuthenticated(true);
      setUser(studentData);
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch {}
      return { success: true };
    } else {
      return {
        success: false,
        message: 'Kombinasi NIM / Kata Sandi demo tidak sesuai. Silakan gunakan kredensial demo yang tertera di form.',
      };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, 'false');
    } catch {}
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
