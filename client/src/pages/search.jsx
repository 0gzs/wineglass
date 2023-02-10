import './style.scss'
import React from 'react'
import useSearch from '../hooks/useSearch.js'

import SearchBox from '../components/SearchBox'
import WineGrid from '../components/WineGrid'
import Wine from '../components/Wine.jsx'

const Search = () => {
  const [wine, searchBy, nothingFound, handleToggle, fetchCallback] = useSearch()

  return (
    <>
      <div className='landing-hero'>
        <h4>winesearch</h4>
        <div className='cover'></div>

        <div className='landing-content'>
          <div className='search-container'>
            <div className='tabs'>
              <p className={searchBy == 'name' ? "selected" : ""} onClick={() => handleToggle('name')}>By Name</p>
              <p className={searchBy == 'desc' ? "selected" : ""} onClick={() => handleToggle('desc')}>By Desc:</p>
            </div>
            <SearchBox
              callback={fetchCallback}
              placeholder={searchBy == "desc" ? "e.g. 'jammy' or 'dry, tannin, cherry'" : "e.g. 'Unruly' 'La Marca' etc."} />
          </div>
        </div>
      </div>
      <WineGrid>
        {wine && wine.map((w, i) => w && <Wine key={i} wine={w} />)}
      </WineGrid>

      {<p id="nothing-found">A glass half-full or, perhaps, one half-empty... No, it's definitely empty.</p>}
    </>
  )
}

export default Search
