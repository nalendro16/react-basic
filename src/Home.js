const Home = () => {
  const handleClick = () => {
    console.log('hola')
  }

  const handleAgain = (nama, e) => {
    console.log('helo ' + nama, e.target)
  }

  return (
    <div className="home">
      <h2 style={{ marginBottom: 20 }}>Homepage</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={(e) => handleAgain('walter', e)}>Clik again</button>
    </div>
  )
}

export default Home
