import noProfile from '@/assets/images/no-profile.jpg'

type Pimage = {
  src?: string | undefined
  className?: string
}
function ProfileImage({ src, className }: Pimage) {
  return (
    <>
      <img
        src={src ?? noProfile}
        alt="img"
        className={className + ' rounded-full border border-blue-300'}
      />
    </>
  )
}

export default ProfileImage
