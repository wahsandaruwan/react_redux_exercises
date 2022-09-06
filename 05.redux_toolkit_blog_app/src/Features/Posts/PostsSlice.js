import { createSlice } from '@reduxjs/toolkit'

// Initial state
const initialState = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the body of post 1.',
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the body of post 2.',
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'This is the body of post 3.',
  },
]

// Slice for posts
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
  },
})

// Whole state
export const selectAllPosts = (state) => state.posts

// All actions
export const { addPost } = postsSlice.actions

// Whole reducer
export default postsSlice.reducer
