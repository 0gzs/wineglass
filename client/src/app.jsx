import React from 'react'
// import { saveWine } from './helperFunctions/index.js'
// import { useGetWine } from './hooks/hooks.js'

import Search from './pages/search.jsx'
import Loader from './components/Loader.jsx'

function App() {
  // const res = useGetWine()
  // const handleSave = () => saveWine(res)

  return (
    <div className='container'>
      {/* <button onClick={handleSave} style={{ width: '50%' }}>Save</button> */}
      <Search />
    </div>
  )
}

export default App
