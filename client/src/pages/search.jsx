import React from 'react'

import styles from './search.module.css'
import useSearch from '../hooks/useSearch.js'

import Dropdown from '../components/Dropdown.jsx'
import Wine from '../components/wine'

const MainSearch = () => {
  const { wine, description, handler, submit, empty } = useSearch()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Let's find your new favorite wine.</h1>
        <p className='sub-heading'>Provide us with a few details that might assist us in our search</p>

        <div>
          <div className={styles.formGroup}>
            <Dropdown
              title={'Types of wine'}
              name="types"
              icon={"fa-solid fa-wine-bottle"}
              handler={handler} />
          </div>

          <div className={styles.formGroup}>
            <Dropdown
              handler={handler}
              title={'Region'}
              name="region"
              icon={"fa-regular fa-map"} />
          </div>

          <div className={styles.formGroup}>
            <Dropdown
              handler={handler}
              title={'Rating'}
              icon={"fa-solid fa-star-half-stroke"}
              name="rating" />
          </div>


          <div className={styles.formGroup}>
            <input type="text" placeholder='e.g. butter, tannin, cherry, fig' value={description} onChange={e => handler('desc', e.target.value)} />
          </div>

          <button type="button" onClick={submit}>Submit</button>
        </div>

      </div>

      {wine && (
        <div className={styles.resultsGrid}>
          {wine.map((w, i) => w && <Wine key={i} wine={w} />)}
        </div>
      )}
      {empty && (
        <div className={styles.empty}>
              <i class="fa-solid fa-wine-glass-empty"></i>
              <p style={{ textTransform: 'uppercase' }}>Nothing here</p>
        </div>
      )}
    </div>
  )
}

export default MainSearch
