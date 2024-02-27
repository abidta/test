import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import { Session } from '../utils/types'
const local=JSON.parse( localStorage.getItem('session')||'{}')
export const reduxStore = configureStore({
  reducer: {
    user: userReducer,
    local
  },
})
reduxStore.subscribe(()=>{
  const {user}=reduxStore.getState()
  const session:Session={
    user,
    expiry:user.expiry
  }
  
 localStorage.setItem('session',JSON.stringify(session))
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch
