import { useState, useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
  // let name = 'Marco'
  const [blogs, setBlogs] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/blogss')
        .then((res) => {
          if (!res.ok) {
            throw Error('Failed fetch from the resources!')
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setBlogs(data)
          setPending(false)
          setError(null)
        })
        .catch((err) => {
          setPending(false)
          setError(err.message)
          setBlogs(null)
        })
    }, 100)
  }, [])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Load...</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  )
}

export default Home
