import { useEffect } from 'react'
import { useAppSelector, useFormApi } from '../../api/hooks'
import Button from '../Button'
import FormComponent from '../Form'
import Input from '../Input'
import ProfileImage from '../ProfileImage'
import NameText from './NameText'
import PostContainer from './PostContainer'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PostField } from '../../utils/types'

function CreatePost({
  setApiUpdate,
}: {
  setApiUpdate: React.Dispatch<React.SetStateAction<number>>
}) {
  const userData = useAppSelector((state) => state.user?.data)
  const { register, handleSubmit, reset } = useForm<PostField>()
  const { fetching, submitForm, data: formRes } = useFormApi()

  const handlePost: SubmitHandler<PostField> = (inputData) => {
    console.log(inputData)
    submitForm('/post', inputData)
    setApiUpdate((apiUpdate) => apiUpdate + 1)
  }

  useEffect(() => {
    if (formRes) {
      reset()
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
            <Button type="submit" className=" w-full" child={'Post'} />
          </>
        </FormComponent>
      </>
    </PostContainer>
  )
}

export default CreatePost
