import React from 'react'
import './Wine.scss'

const Wine = ({ name, img, description }) => {
  return (
    <div className='product-container'>
      <div className='product-img'>
        <img src={img} alt={name} />
      </div>
      <div className='product-details'>
        <h3>{name}</h3>
        <p id='product-description'>{description}</p>
        <button>More Details</button>
      </div>
    </div>
  )
}

export default Wine
