"use client";
import { useState } from "react";
import AppContext from "../contextApi";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleRegisterSuccessModal, setToggleRegisterSuccessModal] = useState<boolean>(false);
  const [brokenToMediumScreen, setBrokenToMediumScreen] = useState<boolean>(false);
  const [toggleSmMenu, setToggleSmMenu] = useState<boolean>(false);
  const [breadcrumbsData, setBreadcrumbsData] = useState<{pathName:string; length:string}>({pathName:"", length:""});
 
  return (
    <AppContext.Provider
      value={{
        toggleRegisterSuccessModal, 
        setToggleRegisterSuccessModal,
        brokenToMediumScreen, 
        setBrokenToMediumScreen,
        toggleSmMenu, 
        setToggleSmMenu,
        breadcrumbsData, 
        setBreadcrumbsData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
