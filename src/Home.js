import { useState } from 'react'

const Home = () => {
  // let name = 'Marco'
  const [blogs, setBlog] = useState([
    { title: 'How cook meth', body: 'lorem10', author: 'walter', id: 1 },
    {
      title: 'Mess with an idiot',
      body: 'lorem ipsum....',
      author: 'saul',
      id: 2,
    },
    {
      title: 'Droping from highschool',
      body: 'lorem ipsum dolor',
      author: 'pinkman',
      id: 3,
    },
  ])

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-prev" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
