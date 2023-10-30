import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='page-wrapper'>
      <div id='header-container'>
        <h1>This or That</h1>
        <h3>Description: </h3>
      </div>
      <div id='poll-links-container'>
        <a id='daily-poll-link' href='' target='_blank'>Daily Poll</a>
        <a id='random-poll-link' href='' target='_blank'>Random Poll</a>
        <a id='past-results-link' href='' target='_blank'>Past Results</a>
      </div>
    </div>
  )
}

export default App
