import { createContext } from "react";
import useAdminAuth from "../hooks/useAdminAuth";

const Context = createContext();

function AdminProvider({ children }) {
  const { authenticated, registerAdmin, logoutAdmin, loginAdmin } =
    useAdminAuth();

  return (
    <Context.Provider
      value={{ authenticated, registerAdmin, logoutAdmin, loginAdmin }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AdminProvider };
