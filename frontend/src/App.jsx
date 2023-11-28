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
      <h1>Collection of Dad Jokes.</h1>
      <i>Jokes count: {jokes.length}</i>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <hr />
            <h5>{joke.question}</h5>
            <h5>{joke.answer}</h5>
          </div>
        ))
      }
    </>
  )
}

export default App
