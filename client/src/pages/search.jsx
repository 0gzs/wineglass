import React, { useState } from 'react'
import axios from 'axios'

import useType from '../hooks/useType.js'
import useRegion from '../hooks/useRegion.js'
import styles from './search.module.css'

import Dropdown from '../components/Dropdown.jsx'
import Wine from '../components/wine'

const MainSearch = () => {
  const [wine, setWine] = useState()
  const { typesArr, typesHandler, typeSelected } = useType()
  const { regionsArr, regionsHandler, regionSelected } = useRegion()

  const [rating, setRating] = useState(0)
  const [empty, setEmpty] = useState(false)
  const ratingsHandler = value => setRating(value)

  const [description, setDescription] = useState("")

  const formSubmit = async () => {
    setEmpty(false)
    const keywords = description.split(',')

    const wineData = {}
    if (typeSelected) wineData['type'] = typeSelected
    if (regionSelected) wineData['region'] = regionSelected
    if (rating) wineData['rating'] = rating
    if (keywords.length > 0) wineData['description'] = keywords

    try {
      const response = await axios.post('/wine/api/main-search', { wineData: wineData })
      setWine(response.data.data)
      if (response.data.data.length == 0) setEmpty(true)
      else setEmpty(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Let's find your new favorite wine.</h1>
        <p className='sub-heading'>Provide us with a few details that might assist us in our search</p>

        <div>
          <div className={styles.formGroup}>
            <Dropdown
              handler={typesHandler}
              options={typesArr}
              title={'Type'}
              icon={"fa-solid fa-wine-bottle"}
              selected={typeSelected} />
          </div>

          <div className={styles.formGroup}>
            <Dropdown
              handler={regionsHandler}
              options={regionsArr}
              title={'Region'}
              icon={"fa-regular fa-map"}
              selected={regionSelected} />
          </div>

          <div className={styles.formGroup}>
            <Dropdown
              handler={ratingsHandler}
              options={[1, 2, 3, 4, 5]}
              title={'Rating'}
              icon={"fa-solid fa-star-half-stroke"}
              selected={rating} />
          </div>


          <div className={styles.formGroup}>
            <input type="text" placeholder='e.g. butter, tannin, cherry, fig' value={description} onChange={e => setDescription(e.target.value)} />
          </div>

          <button type="button" onClick={formSubmit}>Submit</button>
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
