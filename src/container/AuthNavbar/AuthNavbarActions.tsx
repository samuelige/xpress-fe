"use client";

import { Button } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const AuthNavbarActions = () => {
  const router = useRouter();
  const currentPathName = usePathname();
  return (
    <div className='flex flex-row items-center space-x-2'>
        <p>
          {
            currentPathName === "/" && (
              "Already have an account?"
            )
          }
          {
            currentPathName === "/sign-in" && (
              "New to Xpress Rewards?"
            )
          }
        </p>
          {
            currentPathName === "/" && (
              <Button
                component="label"
                variant="outlined"
                onClick={() => router.push('/sign-in')}
              >
                <span className="font-bold">Sign in</span>
              </Button>
            )
          }
          {
            currentPathName === "/sign-in" && (
              <Button
                component="label"
                variant="outlined"
                onClick={() => router.push('/')}
              >
                <span className="font-bold">Sign up</span>
              </Button>
            )
          }
        
    </div>
  )
}

export default AuthNavbarActions