"use client"
import SidebarContainer from './Sidebar'
import AppContext from '@/_lib/contextApi'
import { FC, PropsWithChildren, useContext } from 'react';
import Navbar from './Navbar';

const DashboardLayoutContainer:FC<PropsWithChildren> = ({children}) =>{
  const {brokenToMediumScreen, toggleSmMenu, setToggleSmMenu} = useContext(AppContext);
  
  return (
    <div className="flex">
        {/* Side Navigation Bar */}
        <SidebarContainer />
        {/* Main component on basis of selected navigation from nav bar */}
        <main className="grow bg-gray-500  h-screen w-full  overflow-auto">
          <Navbar/>
          {brokenToMediumScreen && (
            <button className="sb-button" onClick={() => setToggleSmMenu(!toggleSmMenu)}>
              Toggle
            </button>
          )}
          <div className="py-8 pl-[2.19rem] pr-8 w-full">
            {children}
          </div>
          
        </main>
      </div>
  )
}

export default DashboardLayoutContainer