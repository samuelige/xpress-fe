import React from 'react'
import Logo from './Logo'
import AuthNavbarActions from './AuthNavbarActions'

const AuthNavbar = () => {
  return (
    <div className='w-full flex flex-col pt-[4.5rem] px-4 lg:px-8 xl-1:px-0 xl-1:max-w-[75rem] xl-1:m-auto'>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
            <Logo/>
            <AuthNavbarActions/>
        </div>
    </div>
    
  )
}

export default AuthNavbar