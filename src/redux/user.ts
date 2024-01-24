import { createSlice } from '@reduxjs/toolkit'
import { InitialStateUser } from '../utils/types'

const INITIAL_STATE:InitialStateUser = {
  isLoggedIn: JSON.parse(localStorage.getItem('session')!)?.user?.isLoggedIn
}
const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
  },
})
export const {login,logout} = userSlice.actions
export default userSlice.reducer
