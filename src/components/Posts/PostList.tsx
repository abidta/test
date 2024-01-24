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
      <div className="">
        {data?.data.map((post: any) => (
          <div
            className="border border-slate-200 bg-white m-4 mx-5 p-4 rounded-lg shadow-md"
            key={post._id}
          >
            <Post post={post} />
          </div>
        ))}
      </div>
    </>
  )
}
