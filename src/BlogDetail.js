import { useParams } from 'react-router'
import useFetch from './useFetch'

const BlogDetail = () => {
  const { id } = useParams()
  const { data: blog, error, pending } = useFetch(
    'http://localhost:3001/blogs/' + id
  )

  return (
    <div className="detail-blog">
      {error && <div>{error}</div>}
      {pending && <div>Loading....</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="author">written by {blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  )
}

export default BlogDetail
