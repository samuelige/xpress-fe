import { createContext } from 'react';

interface I_AppContext {
  toggleRegisterSuccessModal: boolean;
  setToggleRegisterSuccessModal: (prev: boolean) => void;
}

const AppContext = createContext<I_AppContext>({} as I_AppContext);

export default AppContext;