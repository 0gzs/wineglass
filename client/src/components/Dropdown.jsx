import React, { useState } from 'react'
import './Dropdown.scss'

const Dropdown = ({ handler, options }) => {
  const [opened, setOpened] = useState(false)
  const toggle = () => setOpened(!opened)

  return (
    <div className="dropdown">
      <div>
        <button type="button" onClick={toggle}>
          {!options && "-- Type --"}
          <i className=""></i>
        </button>
      </div>
      {open && (
        <div className="items-container">
          <div>
            {options.map(value => {
              return (
                <p
                  key={i}
                  onClick={e => handler(e, i)}>
                  {value}
                </p>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
