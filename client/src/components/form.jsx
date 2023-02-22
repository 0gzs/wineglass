import React, { useState } from 'react'
import axios from 'axios'
import styles from './form.module.css'

import StrictSearchComponent from './StrictSearchComponent.jsx'
import Dropdown from './Dropdown.jsx'

const Form = ({ resultsHandler }) => {
  const [type, setType] = useState(null)
  const [region, setRegion] = useState(null)
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState('')
  const [strict, setStrict] = useState(false)

  const changeHandler = (name, value) => {
    switch (name) {
      case 'types':
        setType(value)
        break
      case 'region':
        setRegion(value)
        break
      case 'rating':
        setRating(value)
        break
      case 'desc':
        setDescription(value)
        break
      default:
        break
    }
  }

  const submit = async () => {
    const keywords = description.split(',')

    const data = {}
    if (type) data['type'] = type
    if (region) data['region'] = region
    if (rating) data['rating'] = rating
    if (keywords.length > 0) data['description'] = keywords

    try {
      const response = await axios.post('/wine/api/main-search', {
        wineData: data,
        strict: strict
      })

      resultsHandler(response.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  const textFieldHandler = e => setDescription(e.target.value)

  return (

    <div className={styles.container}>
      <h1>Let's find your new favorite wine.</h1>
      <p className='sub-heading'>Provide us with a few details that might assist us in our search</p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.formGroup}>
          <Dropdown
            onChange={changeHandler}
            title={'Types of wine'}
            name="types"
            icon={"fa-solid fa-wine-bottle"} />
        </div>

        <div className={styles.formGroup}>
          <Dropdown
            onChange={changeHandler}
            title={'Region'}
            name="region"
            icon={"fa-regular fa-map"} />
        </div>

        <div className={styles.formGroup}>
          <Dropdown
            onChange={changeHandler}
            title={'Rating (min.)'}
            icon={"fa-solid fa-star-half-stroke"}
            name="rating" />
        </div>


        <div className={styles.formGroup}>
          <input type="text" placeholder='e.g. butter, tannin, cherry, fig' value={description} onChange={textFieldHandler} />
        </div>

        <StrictSearchComponent strict={strict} setStrict={setStrict}/>

        <button type="button" onClick={submit}>Submit</button>
      </div>
    </div>
  )

}

export default Form
