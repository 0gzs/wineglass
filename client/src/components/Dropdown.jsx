import React, { useState } from 'react'
import './Dropdown.scss'

const Dropdown = ({ handler, options, title, icon, selected }) => {
  const [opened, setOpened] = useState(false)
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
                    handler(e.target.innerText)
                    setOpened(!opened)
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
