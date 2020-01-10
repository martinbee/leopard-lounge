import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

const AuthContext = createContext({ isLoggedIn: false });

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => setIsLoggedIn(true), []);
  const logout = useCallback(() => setIsLoggedIn(false), []);

  const context = useMemo(() => ({
    isLoggedIn,
    login,
    logout,
  }), [isLoggedIn, login, logout]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthContextProvider,
};
