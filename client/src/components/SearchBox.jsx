import './SearchBox.scss'
import React, { useState } from 'react'
import { searchQuery } from '../helperFunctions/index.js'
import Dropdown from './Dropdown'

const SearchBox = ({ handleWine }) => {
  const typeOptions = ['Any', 'Syrah', 'Chardonnay', 'Pinot Grigio', 'Pinot Noir', 'Cabernet', 'Red Blend', 'Sauvignon Blanc']
  
  const [query, setQuery] = useState("")
  const [hovering, setHovering] = useState(false)
  const [type, setType] = useState('')

  const handleQuery = e => setQuery(e.target.value)
  const handleType = typeSelected => setType(typeSelected)
  const handleSearch = async () => {
    let res = await searchQuery(query, type)
    handleWine(res.data)
  }

  return (
    <div className='search-box'>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" value={query} onChange={handleQuery} placeholder='Name or Keywords' />
      <Dropdown options={typeOptions} title="Type" handler={handleType} selected={type} />
      <button className='btn' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={handleSearch}>
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
