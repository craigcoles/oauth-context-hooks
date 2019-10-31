import React, { useState, useEffect, useContext, createContext } from "react";

import { OAUTH_URL, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from "Config";
import { useInterval } from "Hooks/useInterval";
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuth(JSON.parse(token));
  }, []);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(auth));
  }, [auth]);

  useInterval(() => {
    const { expires_in, created_at } = auth;

    // if the token has expired, refresh it
    if (
      expires_in !== null &&
      created_at !== null &&
      tokenHasExpired({ expires_in, created_at })
    ) {
      const refreshed = refreshToken();
      console.log(refreshed);
    }
  }, 5000);

  const tokenHasExpired = ({ expires_in, created_at }) => {
    const MILLISECONDS_IN_MINUTE = 1000 * 60;

    // set refreshBuffer to 10 minutes
    // so the token is refreshed before expiry
    // const refreshBuffer = MILLISECONDS_IN_MINUTE * 10;

    // expiry time
    // multiplied by 1000 as server time are return in seconds, not milliseconds
    const expires_at = new Date((created_at + expires_in) * 1000).getTime();
    // the current time
    const now = new Date().getTime();
    // when we want the token to be refreshed
    // const refresh_at = expires_at - refreshBuffer;

    return now >= expires_at;
  };

  const refreshToken = async () => {
    try {
      const params = {
        refresh_token: auth.refresh_token,
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        grant_type: "refresh_token",
      };

      const { data: token } = await API.post(OAUTH_URL, params);

      setAuth(token);

      return true;
    } catch (error) {
      return false;
    }
  };

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
        success(token);
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
