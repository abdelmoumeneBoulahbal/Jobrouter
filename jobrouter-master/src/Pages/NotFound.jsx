import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, 
      quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> <Link to="/" className='goHome' >Go Home</Link>
     </p>
     
    </div>
  )
}

export default NotFound
