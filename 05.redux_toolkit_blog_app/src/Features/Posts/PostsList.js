import { useSelector } from 'react-redux'
import { selectAllPosts } from './PostsSlice'

const PostsList = () => {
  // Global state for posts
  const POSTS = useSelector(selectAllPosts)
  // Rendered posts
  const renderedPosts = POSTS?.map((post) => {
    const { id, title, body } = post
    return (
      <div
        key={id}
        style={{
          border: '1px solid #000',
          maxWidth: '300px',
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    )
  })
  return (
    <>
      <div>
        <h2>All Posts</h2>
        {renderedPosts}
      </div>
    </>
  )
}
export default PostsList
