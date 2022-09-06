import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './PostsSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddPost = () => {
  // Temporary states for post
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  // Dispatcher for posts
  const DISPATCH = useDispatch()

  // Function for adding new post
  const addNewPost = () => {
    const { title, body } = post
    DISPATCH(
      addPost({
        id: nanoid(),
        title,
        body,
      }),
    )
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={post?.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <br />
        <textarea
          value={post?.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          rows="5"
        ></textarea>
        <br />
        <button onClick={addNewPost}>Add</button>
      </div>
    </>
  )
}
export default AddPost
