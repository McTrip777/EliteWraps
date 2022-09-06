import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/notFound.css"


const NotFound = () => {
  return (
    <div className='notFoundContainer'>
        <h1>I could not find this page.</h1>
        <h4>Head back to the main page,</h4>
        <Link to="/">HERE</Link>
    </div>
  )
}

export default NotFound