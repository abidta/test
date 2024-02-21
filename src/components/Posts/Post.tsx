/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfileImage from '../ProfileImage'
import NameText from './NameText'
import PostButton from './PostButton'

function Post({ post }: { post: any }) {
  const handleInteractions = () => {}
  return (
    <>
      <div className="flex justify-start items-center">
        <ProfileImage
          src={post?.user?.image?.thumbnailUrl}
          className="h-[32px] w-[32px]"
        />
        <NameText text={post?.user?.fullName} />
      </div>
      <div className="flex mt-2">
        <h3 className="text-black">{post.content}</h3>
      </div>
      <div>{post?.media && <img src={post?.media[1]?.url} alt="post" />}</div>
      <div className="flex justify-evenly items-center mt-4 p-1 border border-slate-200">
        <PostButton onClick={handleInteractions} text="Like" />
        <PostButton onClick={handleInteractions} text="Comment" />
      </div>
    </>
  )
}

export default Post
