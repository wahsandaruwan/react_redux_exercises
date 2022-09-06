import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../Features/Posts/PostsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})
