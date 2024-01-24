/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfileImage from '../ProfileImage'
import PostButton from './PostButton'

function Post({ post }: { post: any }) {
 const handleInteractions=()=>{


  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center">
        <ProfileImage src={post?.user?.image} className="h-[32px] w-[32px]" />
        <h2 className="ml-2 font-semibold">{post?.user?.fullName}</h2>
      </div>
      <div className="flex mt-2">
        <h3 className="text-black">{post.content}</h3>
      </div>
      <div>{post?.user?.image && <img src="post?.user?.image" alt="post" />}</div>
      <div className="flex justify-evenly items-center mt-4 p-1 border border-slate-200">
        <PostButton  onClick={handleInteractions} text="Like"  />
        <PostButton onClick={handleInteractions} text="Comment" />
      </div>
    </div>
  )
}

export default Post
