import './SearchBox.scss'
import React, { useEffect, useState } from 'react'

import { fetchByDesc, fetchByName } from '../helperFunctions/index.js'

const SearchBox = ({ handleWine }) => {

  const [searchBy, setSearchBy] = useState('name')
  const [query, setQuery] = useState('')
  const [name, setName] = useState('')
  const [hovering, setHovering] = useState(false)

  const handleQuery = e => setQuery(e.target.value)
  const handleName = e => setName(e.target.value)

  const getByDesc = async () => {
    let res = await fetchByDesc(query)
    handleWine(res.data)
  }

  const getByName = async () => {
    let res = await fetchByName(name)
    handleWine(res.data)
  }

  useEffect(() => {
    if (searchBy == 'name') {
      document.getElementById('name').classList.add('selected')
      document.getElementById('desc').classList.remove('selected')
    } else {
      document.getElementById('desc').classList.add('selected')
      document.getElementById('name').classList.remove('selected')
    }
  }, [searchBy])

  return (
    <div className='search-container'>

      <div className='tabs'>
        <p id="name" onClick={() => setSearchBy('name')}>By Name</p>
        <p id="desc" onClick={() => setSearchBy('desc')}>By Desc:</p>
      </div>
      {searchBy == 'desc' ? (
        <div className='search-box'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" value={query} onChange={handleQuery} placeholder="e.g. 'jammy' or 'dry, tannin, cherry'" />
          <button className='btn' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={getByDesc}>
            {!hovering ? (
              <i className="fa-solid fa-wine-glass-empty"></i>
            ) : (
              <i className="fa-solid fa-wine-glass"></i>
            )}
            Search
          </button>
        </div>
      ) : (
        <div className='search-box'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" value={name} onChange={handleName} placeholder="e.g. La Marca, The Prisoner, etc" />
          <button className='btn' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={getByName}>
            {!hovering ? (
              <i className="fa-solid fa-wine-glass-empty"></i>
            ) : (
              <i className="fa-solid fa-wine-glass"></i>
            )}
            Search
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchBox
