import Bloglist from './Bloglist'
import useFetch from './useFetch'

const Home = () => {
  const { data: blogs, pending, error } = useFetch(
    'http://localhost:3000/blogs'
  )
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Load...</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  )
}

export default Home
