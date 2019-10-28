import React, { useState, useEffect, useContext, createContext } from "react";

import { OAUTH_URL, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from "Config";
import API from "Services/API";

export const AuthContext = createContext();

// Provider component that wraps your app and makes auth object
// available to any child component that calls useAuth().
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Hook for child components to get the auth object and re-render
// when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
function useAuthProvider() {
  const [auth, setAuth] = useState({});

  const login = async (payload, success, error) => {
    try {
      const params = {
        ...payload,
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
      };

      const { data: token } = await API.post(OAUTH_URL, params);

      setAuth(token);

      if (success) {
        success();
      }
    } catch (e) {
      if (error) {
        error(e.response ? e.response.data : e);
      }
    }
  };

  const logout = () => setAuth({});

  // Return the user object and auth methods
  return {
    auth,
    login,
    logout,
  };
}
