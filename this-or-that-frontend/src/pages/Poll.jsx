import React from 'react'
import { Link } from 'react-router-dom'

const Poll = () => (
  <div id='page-wrapper'>
    <div id='header-container'>
      <h3>Poll Page (even though this is a spa): </h3>
    </div>
    <div id='poll-links-container'>
      <Link to='/'>Home</Link>
      <Link id='past-results-link' to='/'>Past Results</Link>
    </div>
  </div>
)

export default Poll;