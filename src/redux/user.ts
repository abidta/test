import { createSlice } from '@reduxjs/toolkit'
import { InitialStateUser } from '../utils/types'

const INITIAL_STATE:InitialStateUser = {
  isLoggedIn: JSON.parse(localStorage.getItem('session')!)?.user?.isLoggedIn,
  data:JSON.parse(localStorage.getItem('session')!)?.user?.data
}
const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state,action) => {
      state.isLoggedIn = true
      state.data=action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.data={}
    },
  },
})
export const {login,logout} = userSlice.actions
export default userSlice.reducer
