/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useApi } from '../../api/hooks'
import Post from './Post'

export function PostList() {
  const { data, submitApi } = useApi('/', 'GET')
  useEffect(() => {
    submitApi()
    return () => {}
  }, [])
  console.log(data?.data)

  return (
    <>
      {data?.data.map((post:any) => (
        <Post post={post} key={post._id}/>
      ))}
    </>
  )
}


