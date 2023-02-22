import React, { useEffect, useState } from 'react'

import styles from './search.module.css'

import Wine from '../components/wine'
import Form from '../components/form'

const MainSearch = () => {
  const [wine, setWine] = useState(null)
  const [empty, setEmpty] = useState(false)

  const resultsHandler = data => {
    setWine(data)
    if (data.length == 0) setEmpty(true)
  }

  useEffect(() => {
    if (!wine || wine.length > 0) setEmpty(false)
  }, [wine])

  return (
    <div className={styles.wrapper}>
      <Form resultsHandler={resultsHandler} />

      {wine && (
        <div className={styles.resultsGrid}>
          {wine.map((w, i) => w && <Wine key={i} wine={w} />)}
        </div>
      )}
      {empty && (
        <div className={styles.empty}>
          <i className="fa-solid fa-wine-glass-empty"></i>
          <p style={{ textTransform: 'uppercase' }}>Nothing here</p>
        </div>
      )}
    </div>
  )
}

export default MainSearch
