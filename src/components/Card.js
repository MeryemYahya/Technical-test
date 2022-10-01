import React from 'react'

export default function Card({ post }) {

  return (
    <div className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer border bg-white border-slate-100 shadow-sm rounded-md p-4">
      <h5 className='my-2 font-bold'>{post?.title}</h5>
      <p>{post?.body}</p>
    </div>
  )
}
