import React from 'react'

export default function Card({ post }) {
  return (
    <div key={post?.id} className='border bg-white border-slate-100 shadow-sm rounded-md p-4'>
      <h5 className='my-2 font-bold'>{post?.title}</h5>
      <p>{post?.body}</p>
    </div>
  )
}
