import React, { useState } from 'react'
import './SearchBox.scss'
import Dropdown from './Dropdown'

const SearchBox = () => {
  const [query, setQuery] = useState("")
  const [hovering, setHovering] = useState(false)

  const handleQuery = e => setQuery(e.target.value)
  const typeOptions = ['Any', 'Syrah', 'Chardonnay', 'Pinot Grigio', 'Pinot Noir', 'Cabernet', 'Red Blend', 'Sauvignon Blanc']

  return (
    <div className='search-box'>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" value={query} onChange={handleQuery} placeholder='Name or Keywords' />
      <Dropdown options={typeOptions} title="Type" />
      <button className='btn' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        {!hovering ? (
          <i className="fa-solid fa-wine-glass-empty"></i>
        ) : (
          <i className="fa-solid fa-wine-glass"></i>
        )}
        Search
      </button>
    </div>
  )
}

export default SearchBox
