import { createSlice } from '@reduxjs/toolkit'
import { InitialStateUser } from '../utils/types'
import { SESSION_TTL } from '../config/constants'

const INITIAL_STATE: InitialStateUser = {
  isLoggedIn: JSON.parse(localStorage.getItem('session')!)?.user?.isLoggedIn,
  data: JSON.parse(localStorage.getItem('session')!)?.user?.data,
  layout: true,
  expiry: JSON.parse(localStorage.getItem('session')!)?.user?.expiry,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.data = action.payload
      console.log(SESSION_TTL, 'login', new Date().getTime())

      state.expiry = new Date().getTime() + SESSION_TTL
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.data = {}
      state.expiry = 0
    },
    switchLayout: (state, action) => {
      state.layout = action.payload
    },
  },
})

export const { login, logout, switchLayout } = userSlice.actions
export default userSlice.reducer
