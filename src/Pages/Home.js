import React from 'react'
import NavBar from '../Layouts/NavBar'

export default function Home() {
  return (
    <div className='w-full'>
      <NavBar />
      <div className='py-2 px-6 flex justify-between container mx-auto'>
        <h1 className='text-2xl font-bold'>Home</h1>
      </div>
    </div>
  )
}
