import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from 'react-router-dom';
import Context from '../context/Context';

export default function NavBar() {

  const { connected, setConnected } = useContext(Context)
  const navigate = useNavigate();
  const location = useLocation();

  const Logout = () => {
    setConnected(false)
    localStorage.clear();
    navigate('/login')
  }

  return (
    <nav className='w-full bg-secondary shadow-sm'>
      <div className='py-2 px-6 flex items-center justify-between container mx-auto'>
        <div className=''>
          <h3 className='font-bold text-lg'>Logo</h3>
        </div>
        <div className='gap-5 inline-flex items-center'>
          <Link to="/" className={`font-semibold ${location.pathname === "/" && "text-primary"}`} >Home</Link>
          {connected && <Link to="/posts" className={`font-semibold ${location.pathname === "/posts" && "text-primary"}`}>Posts</Link>}
          {
            !connected ?
              <Link to="/login" className='bg-primary text-white py-2 px-6 rounded-lg'>Login</Link>
              :
              <button onClick={Logout} className='bg-primary text-white py-2 px-6 rounded-lg'>Logout</button>
          }

        </div>
      </div>
    </nav>
  )
}
