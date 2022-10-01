import React from 'react'
import { getData } from '../Services/data'
import { useQuery } from '@tanstack/react-query';
import Card from '../components/Card';
import LoadingCard from '../components/LoadingCard';

export default function CardList() {

  const posts = useQuery(['posts'], getData, {
    retry: 1,
  })

  const renderFetchedData = () => {
    if (posts.isError) return <h1 className='text-lg'> An error occurred</h1>
    if (posts.isLoading) return (
      <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </>
    )
    if (posts.data) return (
      posts.data?.map(post => (
        <Card key={post?.id} post={post} />
      ))
    )
  }
  return (
    <div className='w-full my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4'>
      {
        renderFetchedData()
      }
    </div>
  )
}
