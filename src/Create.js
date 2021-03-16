import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('walter')

  return (
    <div className="create">
      <h2>Write a new blog</h2>
      <form>
        <label className="title-create">Blog Title: {title}</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: {body}</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author: {author}</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="walter">walter</option>
          <option value="pinkman">pinkman</option>
          <option value="walter">tuco</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create
