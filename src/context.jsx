import React, { useContext, createContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  return (
    <AppContext.Provider value={{ open, setOpen, openMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
