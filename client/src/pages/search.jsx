import React from 'react'
import SearchBox from '../components/SearchBox'
import './style.scss'

const Search = ({ handleWine }) => {
  return (
    <>
      <div className='landing-hero'>
        <h4>winesearch</h4>
        <div className='cover'></div>

        <div className='landing-content'>
          <h1>Find the perfect glass,<br/>for your perfect night.</h1>
          <SearchBox handleWine={handleWine} />
        </div>
      </div>
    </>
  )
}

export default Search
