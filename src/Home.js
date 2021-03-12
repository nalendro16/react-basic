import { useState } from 'react'
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

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blog0s" />
    </div>
  )
}

export default Home
