/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useApi, useAppSelector, useFormApi } from '../../api/hooks'
import Post from './Post'
import PostContainer from './PostContainer'
import ProfileImage from '../ProfileImage'
import Input from '../Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PostField } from '../../utils/types'
import NameText from './NameText'
import Button from '../Button'
import FormComponent from '../Form'

export function PostList() {
  const { data, submitApi } = useApi('/', 'GET')
  const { fetching, submitForm, data: formRes } = useFormApi('/post')
  const userData = useAppSelector((state) => state.user?.data)
  const { register, handleSubmit, reset } = useForm<PostField>()
  useEffect(() => {
    submitApi()
    return () => {}
  }, [])
  useEffect(() => {
    if (formRes) {
      reset()
    }
  }, [formRes])

  console.log(data?.data)
  const handlePost: SubmitHandler<PostField> = (inputData) => {
    console.log(inputData)
    submitForm(inputData)
  }

  return (
    <>
      <PostContainer>
        <>
          <div className="flex">
            <ProfileImage
              src={userData?.image?.thumbnailUrl}
              className="h-[32 px] w-[32px]"
            />
            <NameText text={userData?.fullName} />
          </div>
          <FormComponent
            className={false}
            fetching={fetching}
            onSubmit={handleSubmit(handlePost)}
          >
            <>
              <Input
                name="content"
                type="text"
                register={register}
                required
                placeholder="Write your thoughts"
              />
              <Button type="submit" className=" w-full" child={'Post'} />
            </>
          </FormComponent>
        </>
      </PostContainer>

      {data?.data.map((post: any) => (
        <PostContainer key={post?._id}>
          <Post post={post} />
        </PostContainer>
      ))}
    </>
  )
}
