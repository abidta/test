import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { asyncApi } from '@/api/hooks'
import { FetchPostArg } from '@/utils/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const INITIAL_STATE: { post: any[]; isLast: boolean } = {
  post: [],
  isLast: false,
}

const fetchPost = createAsyncThunk(
  'user/fetchpost',
  async ({ page, limit }: FetchPostArg) => {
    console.log(page, limit)

    const { data } = await asyncApi(`/?page=${page}&limit=${limit}`)
    return data
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState: INITIAL_STATE,
  reducers: {
    addPost: (state, action) => {
      state.post.unshift(action.payload)
    },
    deletePost: (state, action) => {
      console.log(action.payload)

      state.post = state.post.filter((val) => val?._id !== action.payload)
      console.log(state.post)
    },
    clearPosts: (state) => {
      state.post = []
      state.isLast = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      if (!action.payload.length) {
        state.isLast = true
      }
      state.post = [...state.post, ...action.payload]
    })
  },
})

export const { clearPosts, addPost, deletePost } = postSlice.actions
export { fetchPost }
export default postSlice.reducer
