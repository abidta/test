import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
const local=JSON.parse( localStorage.getItem('user')||'{}')
export const reduxStore = configureStore({
  reducer: {
    user: userReducer,
    local
  },
})
reduxStore.subscribe(()=>{
  const {user}=reduxStore.getState()
 localStorage.setItem('user',JSON.stringify(user))
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch
