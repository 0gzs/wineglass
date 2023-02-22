import React, { useState } from 'react'
import styles from './form.module.css'

const StrictSearchComponent = ({ strict, setStrict }) => {
  const [showInfo, setShowInfo] = useState(false)

  const buttonHandler = (name, value) => {
    switch (name) {
      case 'show':
        setShowInfo(value)
        break
      case 'strict':
        setStrict(value)
        break
      default:
        break
    }
  }

  return (
    <div style={{
      position: 'relative',
      alignSelf: 'flex-end',
      margin: '0.55em 5% 0.75em 0',
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      gap: '0.5em'
    }}>
      <p>Strict search: </p>
      <div className={!strict ? styles.toggle : styles.toggled}>
        <button
          className={styles.on}
          onClick={() => buttonHandler('strict', !strict)}>
        </button>
      </div>
      <i
        className="fa-regular fa-circle-question"
        style={{
          color: '#d7d7d7',
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)'
        }}
        onClick={() => buttonHandler('show', !showInfo)}>
      </i>

      {showInfo && (
        <div style={{
          padding: '0.75em 1em',
          position: 'absolute',
          left: '125%',
          width: '15rem',
          borderRadius: '0.125em',
          fontSize: '1.2rem',
          lineHeight: '1.5',
          bottom: '2em',
          zIndex: 10,
          backgroundColor: '#43494c'
        }}>
          When this is on, the search results <em>must </em>
          match the included fields.
        </div>
      )}
    </div>
  )
}

export default StrictSearchComponent
