import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Welcome to Laugh Arena.</h1>
      <p>Jokes count: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <hr />
            <h4>{joke.question}</h4>
            <h4>{joke.answer}</h4>
          </div>
        ))
      }
    </>
  )
}

export default App
