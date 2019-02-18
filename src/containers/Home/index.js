import React from 'react'
import Header from '../../components/Header'
const home = () => {
  return(
    <div>
      <Header />
      <div>home sweet home!</div>
      <button onClick={() => alert('clicked')}>
        click
      </button>
    </div>

  )
}

export default home
