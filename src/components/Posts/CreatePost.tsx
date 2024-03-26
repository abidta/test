import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector, useFormApi } from '../../api/hooks'
import Button from '../Button'
import FormComponent from '../Form'
import Input from '../Input'
import ProfileImage from '../ProfileImage'
import NameText from './NameText'
import PostContainer from './PostContainer'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PostField } from '../../utils/types'
import FileInput from '../FileInput'
import { fileTypes } from '../../config/constants'
import { addPost } from '../../redux/posts'

type FileArray = { file: File; blob: string }

function CreatePost() {
  const [pictures, setPictures] = useState<FileArray[]>([])
  const userData = useAppSelector((state) => state.user?.data)
  const { register, handleSubmit, reset } = useForm<PostField>()
  const { fetching, submitForm, data: formRes } = useFormApi()
  const dispatch = useAppDispatch()
console.log(formRes);

  const handlePost: SubmitHandler<PostField> = (inputData) => {
    const formData = new FormData()
    if (pictures.length !== 0) {
      pictures.forEach((val) => {
        formData.append('posts', val.file)
      })
    }

    formData.append('content', inputData.content)

    submitForm('/post', formData)
    setPictures([])
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.files?.item(0)?.type
    console.log(e.target.files?.item(1)?.type)

    if (type && type in fileTypes) {
      const imageArray = Array.from(e.target.files!).map((file) => ({
        file,
        blob: URL.createObjectURL(file),
      }))
      console.log(imageArray)

      setPictures([...pictures, ...imageArray])
    } else {
      if (type) {
        alert(`can't upload '${type} type files`)
      }
    }
  }
  const renderPictures = (pictures: FileArray[]) => {
    return pictures.map((picture) => (
      <img
        key={picture.blob}
        src={picture.blob}
        style={{ height: '30px', width: '30px' }}
        alt=""
      />
    ))
  }

  useEffect(() => {
    if (formRes) {
      reset()
      dispatch(addPost(formRes.data))
      // setApiUpdate((apiUpdate) => apiUpdate + 1)
    }
  }, [formRes])

  return (
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
            <FileInput
              onchange={handleChange}
              type="file"
              register={register}
              name="posts"
              multiple
            />
            {pictures && <div className="flex p-2">{renderPictures(pictures)}</div>}
            <Button type="submit" className=" w-full" children={'Post'} />
          </>
        </FormComponent>
      </>
    </PostContainer>
  )
}

export default CreatePost
