import { useParams } from 'react-router'

const BlogDetail = () => {
  const { id } = useParams()
  return (
    <div className="detail-blog">
      <h2>This blog Detail {id}</h2>
    </div>
  )
}

export default BlogDetail
