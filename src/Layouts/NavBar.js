import React from 'react'
import { Link } from "react-router-dom"
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const Logout = () => {
    navigate('/login')
  }

  return (
    <nav className='w-full bg-secondary shadow-sm'>
      <div className='py-2 px-6 flex justify-between container mx-auto'>
        <div className=''>
          <h3 className='font-bold text-lg'>Logo</h3>
        </div>
        <div className='gap-5 inline-flex items-center'>
          <Link to="/" className={`font-semibold ${location.pathname === "/" && "text-primary"}`} >Home</Link>
          <Link to="/posts" className={`font-semibold ${location.pathname === "/posts" && "text-primary"}`}>Posts</Link>
          <Link to="/login" className='bg-primary text-white py-2 px-6 rounded-lg'>Login</Link>
          <button onClick={Logout} className='bg-primary text-white py-2 px-6 rounded-lg'>Logout</button>
        </div>
      </div>
    </nav>
  )
}
