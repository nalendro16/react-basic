import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="no">
      <h2>404 Not Found</h2>
      <p>The page you looking for are not found</p>
      <Link to="/">Back to Website</Link>
    </div>
  )
}

export default NotFound
