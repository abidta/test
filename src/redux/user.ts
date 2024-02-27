import { createSlice } from '@reduxjs/toolkit'
import { InitialStateUser } from '../utils/types'
import { SESSION_TTL } from '../config/constants'

const INITIAL_STATE:InitialStateUser = {
  isLoggedIn: JSON.parse(localStorage.getItem('session')!)?.user?.isLoggedIn,
  data:JSON.parse(localStorage.getItem('session')!)?.user?.data,
  expiry:null
}
const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state,action) => {
      state.isLoggedIn = true
      state.data=action.payload
      console.log(SESSION_TTL,'login', new Date().getTime());
      
      state.expiry=new Date().getTime()+SESSION_TTL
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.data={}
      state.expiry=null
    },
  },
})
export const {login,logout} = userSlice.actions
export default userSlice.reducer
