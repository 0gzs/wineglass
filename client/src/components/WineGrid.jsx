import React from 'react'
import './WineGrid.scss'

const WineGrid = ({ children }) => {
  return (
    <div className='slider'>
      {children}
    </div>
  )
}

export default WineGrid
