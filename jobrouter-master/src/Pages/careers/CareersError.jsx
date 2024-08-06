import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function CareersError() {
    const error = useRouteError();
  
    return (
    <div>
      <h2 className='career-error-title'>Error</h2>
      <p className='career-error-message'>{error.message}</p>
      <Link to="/" className='goHome'>Go Home</Link>
    </div>
  )
}

export default CareersError
