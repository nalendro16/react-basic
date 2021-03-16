import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCon = new AbortController()

    setTimeout(() => {
      fetch(url, { signal: abortCon.signal })
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
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setPending(false)
            setError(err.message)
            setData(null)
          }
        })
    }, 1000)
    return () => abortCon.abort()
  }, [url])

  return { data, pending, error }
}

export default useFetch
