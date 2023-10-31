import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div id='page-wrapper'>
    <div id='header-container'>
      <h1>This or That</h1>
      <h3>Description: </h3>
    </div>
    <div id='poll-links-container'>
      <Link id='daily-poll-link' to='/poll'>Daily Poll</Link>
      <Link id='random-poll-link' to='/poll'>Random Poll</Link>
      <Link id='past-results-link' to='/results'>Past Results</Link>
    </div>
  </div>
)

export default Home;