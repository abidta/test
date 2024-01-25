/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useApi, useAppSelector } from '../../api/hooks'
import Post from './Post'
import PostContainer from './PostContainer'
import ProfileImage from '../ProfileImage'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import { PostField } from '../../utils/types'
import NameText from './NameText'

export function PostList() {
  const { data, submitApi } = useApi('/', 'GET')
  const userData= useAppSelector((state)=>state.user?.data)
  const { register } = useForm<PostField>()
  useEffect(() => {
    submitApi()
    return () => {}
  }, [])
  console.log(data?.data)

  return (
    <>
      <div className="">
        <PostContainer
          child={
            <><div className='flex'>
              <ProfileImage src={userData?.image?.thumbnailUrl} className="h-[32 px] w-[32px]" />
              <NameText text={userData?.fullName}/></div>
              <Input
                name="post"
                type="text"
                register={register}
                placeholder="Write your thoughts"
              />
            </>
          }
        />
        {data?.data.map((post: any) => (
          <PostContainer key={post._id} child={<Post post={post} />} />
        ))}
      </div>
    </>
  )
}
