import React from 'react'
import './Wine.scss'

const Wine = ({ wine }) => {
  return (
    <div className='product-container'>
      <div className='product-img'>
        <img src={wine.image} alt={wine.name} />
      </div>
      <h3>{wine.name}</h3>
      <div className='product-details'>
        <p className='product-description'>{wine.description}</p>
        <div className='product-tags'>
          <p><span>Price: </span>{wine.price}</p>
          <p><span>Base Price: </span>{wine.base_price}</p>
          <p><span>Type: </span>{wine.type}</p>
          <p><span>Rating: </span>{wine.rating}</p>
          <p><span>On Hand: </span>{wine.on_hand}</p>
          <p><span>SKU: </span>{wine.sku}</p>
        </div>
      </div>
    </div>
  )
}

export default Wine
