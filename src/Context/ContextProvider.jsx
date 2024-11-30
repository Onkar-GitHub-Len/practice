import React, { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Create a Provider Component
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("Himanshi");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
