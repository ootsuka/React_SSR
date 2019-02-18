import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return(
    <div>
      <Link to='/'>home</Link>
      <br />
      <Link to='/login'>login</Link>
    </div>

  )
}

export default header
