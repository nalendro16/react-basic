import { useState, useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
  // let name = 'Marco'
  const [blogs, setBlog] = useState([
    {
      title: 'How cooked blue saphired meth',
      body: 'lorem10',
      author: 'walter',
      id: 1,
    },
    {
      title: 'Mess with an idiotic Saul',
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
    {
      title: '[Leaked!] this is how jesse spell bit*ch',
      body: 'lorem ipsum dolor',
      author: 'pinkman',
      id: 4,
    },
  ])

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id)
    setBlog(newBlog)
  }

  useEffect(() => {
    console.log('useEffect running')
    console.log(blogs)
  })

  return (
    <div className="home">
      <Bloglist blogs={blogs} handleDelete={handleDelete} />
      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author == 'pinkman')}
        title="Mario's blog"
      /> */}
    </div>
  )
}

export default Home
