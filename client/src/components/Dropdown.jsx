import React, { useState } from 'react'
import './Dropdown.scss'
import fieldData from '../data/field-data.js'

const Dropdown = ({ handler, title, icon, name }) => {
  const options = fieldData[name]

  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(null)

  const toggle = () => setOpened(!opened)
  

  return (
    <div className="dropdown">
      <div style={{ position: 'relative'}}>
        <i className={icon + " icon-left"}></i>
        <button type="button" onClick={toggle}>
          {selected || title}
          <i className="fa-solid fa-chevron-down icon-right"></i>
        </button>
      </div>
      {opened && (
        <div className="items-container" onMouseLeave={() => {
          if (opened) setOpened(false)
        }}>
          <div>
            {options.map((value, i) => {
              return (
                <p
                  key={i}
                  onClick={e => {
                    handler(name, e.target.innerText)
                    setOpened(!opened)
                    setSelected(e.target.innerText)
                  }}>
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
