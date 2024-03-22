import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { asyncApi } from '../api/hooks'

const INITIAL_STATE: { post: string[] } = {
  post: [],
}

const fetchPost = createAsyncThunk('user/fetchpost', async (page: number) => {
  const { data } = await asyncApi(`/?page=${page}`)
  return data
})

const postSlice = createSlice({
  name: 'posts',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload
    })
  },
})

export default postSlice.reducer
export { fetchPost }
