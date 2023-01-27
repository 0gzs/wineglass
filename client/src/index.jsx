import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app')
const root = createRoot(container)

function App() {
  return (
    <div>
      <h1>Parent <span>Component</span></h1>
    </div>
  )
}

root.render(<App/>)
