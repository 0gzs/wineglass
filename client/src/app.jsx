import React from 'react'
// import { saveWine } from './helperFunctions/index.js'
// import { useGetWine } from './hooks/hooks.js'

import Search from './pages/search.jsx'

function App() {
  // const res = useGetWine()
  // const handleSave = () => saveWine(res)

  return (
    <>
      <header>
        <h3>wineglass</h3>
      </header>
      {/* <button onClick={handleSave} style={{ width: '50%' }}>Save</button> */}
      <Search />
    </>
  )
}

export default App
