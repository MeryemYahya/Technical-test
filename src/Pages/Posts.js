import React from 'react'
import NavBar from '../Layouts/NavBar'
import CardList from '../Containers/CardList'

export default function Posts() {
  return (
    <div className='w-full'>
      <NavBar />
      <div className='py-2 px-6 container mx-auto'>
        <h1 className='text-2xl font-bold my-4'>Posts</h1>
        <CardList />
      </div>
    </div>
  )
}

