import { useState, type ReactNode } from "react";
import { AuthContext, type LoginFormState } from "./AuthContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<LoginFormState>({
    id: "",
    password: "",
    name: "",
  });

  const login = (id: string, password: string, name: string) =>
    setAuth({
      id,
      password,
      name,
    });
  const logout = () =>
    setAuth({
      id: "",
      password: "",
      name: "",
    });

  // 공유할 state
  const value = {
    id: auth.id,
    password: auth.password,
    name: auth.name,
    isLoggedin: auth.id !== "",
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
