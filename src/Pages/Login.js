import React from 'react'
import NavBar from '../Layouts/NavBar'
import LoginInput from '../Containers/LoginInput'

export default function Login() {
  return (
    <div className='w-full h-screen'>
      <NavBar />
      <div className='py-2 px-6 container mx-auto h-full'>
        <LoginInput />
      </div>
    </div>
  )
}
