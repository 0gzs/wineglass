import React, { useState } from 'react'
import './Dropdown.scss'

const Dropdown = ({ title, options }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const handleOpen = () => setOpen(!open)
  const handleSelect = e => {
    setSelected(e.target.innerText) 
    handleOpen()
  }

  return (
    <div className='dropdown'>
        <div>
          <button type="button" onClick={handleOpen}>
            {!selected || selected.length == 0 ? (
              <>
                { title } 
                <i className="fa-solid fa-chevron-down"></i>
              </>
            ): (
              <>
                { selected }
                <i className="fa-regular fa-circle-xmark exit"></i> 

              </>
            )}
          </button>
        </div>
      {open && (
        <div className='items-container'>
          <div>
            {options.map((opt, i) => {
              return <p key={i} onClick={handleSelect}>{opt}</p>
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
