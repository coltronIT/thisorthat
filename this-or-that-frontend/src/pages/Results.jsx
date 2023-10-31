import React from 'react'
import { Link } from 'react-router-dom'

const Results = () => (
  <div id='page-wrapper'>
    <div id='header-container'>
      <h3>Results Page (even though this is a spa): </h3>
    </div>
    <div id='poll-links-container'>
      <Link id='daily-poll-link' to='/'>Daily Poll</Link>
      <Link id='random-poll-link' to='/'>Random Poll</Link>
      <Link to='/'>Home</Link>
    </div>
  </div>
)

export default Results;