"use client";
import React, { FC, PropsWithChildren } from 'react'
import AuthNavbar from './AuthNavbar';
import { usePathname } from 'next/navigation';

const MainLayout:FC<PropsWithChildren> = ({children}) => {
    const currentPathName = usePathname();
  return (
    <>
        {
            currentPathName === '/' || currentPathName === '/sign-in' ? (
                <div className='bg-gray-500 h-screen'>
                    <AuthNavbar/>
                    {children}
                </div>
            ) : (
                <main>
                    {
                        children
                    }
                </main>
            )
        }
        
    </>
  )
}

export default MainLayout