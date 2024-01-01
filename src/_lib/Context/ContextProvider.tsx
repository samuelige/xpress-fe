"use client";
import { useState } from "react";
import AppContext from "../contextApi";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleRegisterSuccessModal, setToggleRegisterSuccessModal] = useState<boolean>(false);
 
  return (
    <AppContext.Provider
      value={{
        toggleRegisterSuccessModal, 
        setToggleRegisterSuccessModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
