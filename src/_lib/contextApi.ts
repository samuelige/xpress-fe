import { createContext } from 'react';

interface I_AppContext {
  toggleRegisterSuccessModal: boolean;
  setToggleRegisterSuccessModal: (prev: boolean) => void;
  brokenToMediumScreen:boolean;
  setBrokenToMediumScreen:(prev: boolean) => void;
  toggleSmMenu:boolean;
  setToggleSmMenu:(prev: boolean) => void;
  breadcrumbsData: {pathName:string; length:string}, 
  setBreadcrumbsData:(prev: {pathName:string; length:string}) => void
}

const AppContext = createContext<I_AppContext>({} as I_AppContext);

export default AppContext;