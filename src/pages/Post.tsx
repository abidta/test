import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useApi } from "../api/hooks";

function Post() {
   const {postId}= useParams()
   const {data,submitApi,error}= useApi(`/posts/${postId}`,'GET')
   console.log(postId);
   useEffect(() => {
     submitApi()
     
   }, [])
   
  return <>
 {error&&'post notfound'}
 {data&&data?.data?.content}
  </>
}

export default Post
