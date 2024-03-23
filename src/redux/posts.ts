import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { asyncApi } from '../api/hooks'
import { FetchPostArg } from '../utils/types'

const INITIAL_STATE: { post: string[]; isLast: boolean } = {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      if (!action.payload.length) {
        state.isLast = true
      }
      state.post = [...state.post, ...action.payload]
    })
  },
})

export default postSlice.reducer
export { fetchPost }
