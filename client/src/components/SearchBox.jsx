import React, { useState } from 'react'

const SearchBox = ({ callback, placeholder }) => {
  const [query, setQuery] = useState('')
  const [hovering, setHovering] = useState(false)

  return (
    <>
      <div className='search-box'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder={placeholder} />
        <button className='btn' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={() => callback(query)}>
          {!hovering ? (
            <i className="fa-solid fa-wine-glass-empty"></i>
          ) : (
            <i className="fa-solid fa-wine-glass"></i>
          )}
          Search
        </button>
      </div>
    </>
  )
}

export default SearchBox
