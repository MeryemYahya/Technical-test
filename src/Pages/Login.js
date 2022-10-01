import React, { useContext } from 'react'
import NavBar from '../Layouts/NavBar'
import LoginInput from '../Containers/LoginInput'
import Context from '../context/Context';
import { Navigate } from "react-router-dom";

export default function Login() {
  const { connected } = useContext(Context);

  if (!connected)
    return (
      <div className='flex flex-col w-full h-screen'>
        <NavBar />
        <div className='py-2 px-6 container mx-auto h-full'>
          <LoginInput />
        </div>
      </div>
    )
  else {
    return <Navigate to="/" replace />;
  }
}
