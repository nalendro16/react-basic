import { useState } from 'react'
import { useHistory } from 'react-router'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('walter')
  const [isPending, setisPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    setisPending(true)

    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setisPending(false)
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Write a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label className="title-create">Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="walter">walter</option>
          <option value="pinkman">pinkman</option>
          <option value="walter">tuco</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    </div>
  )
}

export default Create
