import React, { useState } from 'react'
import './Dropdown.scss'

const Dropdown = ({ title, options, handler, selected }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  const handleSelect = e => {
    handler(e.target.innerText)
    setOpen(false)
  }

  return (
    <div className='dropdown'>
        <div>
          <button type="button" onClick={handleOpen}>
            {!selected || selected.length == 0 ? (
              <>
                { title } 
              </>
            ): (
              <>
                { selected }
              </>
            )}
            <i className="fa-solid fa-chevron-down"></i>
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
