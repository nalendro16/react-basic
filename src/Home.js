import { useState, useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
  // let name = 'Marco'
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setBlogs(data)
      })
  }, [])

  return (
    <div className="home">
      {blogs && <Bloglist blogs={blogs} />}
      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author == 'pinkman')}
        title="Mario's blog"
      /> */}
      {/* make useable component */}
    </div>
  )
}

export default Home
