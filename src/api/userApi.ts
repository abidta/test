import { redirect } from "react-router-dom";
import { api } from "./axios"

export const createUser=async({request}:{request:Request})=>{
    let formData= await request.formData()
    let updates= Object.fromEntries(formData)
    console.log(updates,'kkk');
    
    let {data}= await api.post('/auth/signup',updates)
   let user=data
return {user}
}
export const loginUser =async ({request}:{request:Request}) => {
    let formData= await request.formData()
    let updates= Object.fromEntries(formData)
    console.log(updates);
    
    let {data}= await api.post('/auth/login',updates)
   let user=data
   return redirect('/')
}