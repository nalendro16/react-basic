import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed fetch from the resources!')
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setPending(false)
          setError(null)
        })
        .catch((err) => {
          setPending(false)
          setError(err.message)
          setData(null)
        })
    }, 100)
  }, [url])

  return { data, pending, error }
}

export default useFetch
