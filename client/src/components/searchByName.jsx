import React, { useState } from "react"
import styles from './form.module.css'

const SearchByName = () => {
  const [name, setName] = useState('')

  const changeHandler = e => setName(e.target.value)

  const submit = () => {}

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.formGroup}>
          <input type="text" placeholder='e.g. butter, tannin, cherry, fig' value={name} onChange={changeHandler} />
        </div>
      </div>
      
      <button type="button" onClick={submit}>Submit</button>
    </div>
  )
}

export default SearchByName
