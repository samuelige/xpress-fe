import { Button } from '@mui/material'
import React from 'react'

const AuthNavbarActions = () => {
  return (
    <div className='flex flex-row items-center space-x-2'>
        <p>Already have an account?</p>
        <Button
            component="label"
            variant="outlined"
        >
            <span className="font-bold">Sign in</span>
        </Button>
    </div>
  )
}

export default AuthNavbarActions