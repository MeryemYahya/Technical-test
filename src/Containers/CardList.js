import React from 'react'
import { getData } from '../services/data'
import { useQuery } from '@tanstack/react-query';
import Card from '../components/Card';
import LoadingCard from '../components/LoadingCard';

export default function CardList() {

  const posts = useQuery(['posts'], getData, {
    onError: (error) =>
      alert(`Something went wrong: ${error.message}`),
  })
  console.log(posts)
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4'>
      {
        posts.isLoading ?
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
          :

          posts.data.map(post => (
            <Card key={post?.id} post={post} />
          ))
      }
    </div>
  )
}
