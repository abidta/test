/* eslint-disable @typescript-eslint/no-explicit-any */

function Post({post}:{post:any}) {
  return (
    <div className="">{post.content}</div>
  )
}  

export default Post