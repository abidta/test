/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useEffect, useRef, useState } from 'react'
import { ProfileImage } from '@/components'
import NameText from './NameText'
import PostButton from './PostButton'
import { Link } from 'react-router-dom'
import { useApi } from '@/api/hooks'

export function Post({ post }: { post: any }) {
  const [like, setLike] = useState(post?.liked)
  const isMounted = useRef(false)
  const { mutate } = useApi()

  const handleLike = () => {
    setLike(!like)
  }

  const handleComment = () => {}

  useEffect(() => {
    if (isMounted.current) {
      mutate(`/posts/${post._id}?action=${like ? 'like' : 'unlike'}`, {}, 'PUT')
    }
    isMounted.current = true
  }, [like])

  return (
    <>
      <div className="flex justify-start items-center">
        <ProfileImage
          src={post?.user?.image?.thumbnailUrl}
          className="h-[32px] w-[32px]"
        />
        <Link to={`/${post?.user?.username}`}>
          <NameText text={post?.user?.fullName} />
        </Link>
      </div>
      <Link to={`/posts/${post._id}`}>
        <div className="flex mt-2">
          <h3 className="text-black">{post.content}</h3>
        </div>
        <div className="flex flex-wrap justify-center">
          {post?.media?.map(
            (media: { fileId: Key | null | undefined; url: string | undefined }) => (
              <img
                className="h-52 min-w-0.5 border border-slate-100 mr-1 rounded-sm cursor-pointer"
                key={media.fileId}
                src={media.url}
                alt="post"
              />
            )
          )}
        </div>
      </Link>
      <div className="flex justify-evenly items-center mt-4 p-1 border border-slate-200">
        <PostButton onClick={handleLike} text={like ? 'Unlike' : 'Like'} />
        <PostButton onClick={handleComment} text="Comment" />
      </div>
    </>
  )
}
