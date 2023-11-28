import { useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>Oh captain, my captain</h1>
      <p>Jokes count: {jokes.length}</p>

      {
        jokes.map((joke) => {
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <h4>{joke.answer}</h4>
          </div>
        })
      }
    </>
  )
}

export default App
