import React from "react";
import { useAsync } from "react-async";
// import login, register, and logout functions here

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const {
    data = {
      user: null
    },
    error,
    isRejected,
    isPending,
    isSettled,
    reload
  } = useAsync({
    promiseFn: () => {
      console.log("promise function!");
    }
  });

  const login = () => {}; // make a login request

  const register = () => {}; // register user

  const logout = () => {}; // clear the token from localStorage and the user data

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
