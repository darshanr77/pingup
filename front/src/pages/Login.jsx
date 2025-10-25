import React from 'react'
import {assets} from '../assets/assets'
import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* background image */}
      <img src={assets.logo} className='absolute top-0 left-0 -z-1 w-full h-full object-cover' alt="" />
      <SignIn />
    </div>
  )
}

export default Login
