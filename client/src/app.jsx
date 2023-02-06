import React, { useState } from 'react'
// import { saveWine } from './helperFunctions/index.js'
// import { useGetWine } from './hooks/hooks.js'

import Search from './pages/search.jsx'
import WineGrid from './components/WineGrid.jsx'
import Loader from './components/Loader.jsx'
import Wine from './components/Wine.jsx'

function App() {
  const [wine, setWine] = useState(null)
  // const res = useGetWine()
  
  const handleWine = wineData => setWine([...wineData])
  // const handleSave = () => saveWine(res)

  return (
    <div className='container'>
      {/* <button onClick={handleSave} style={{ width: '50%' }}>Save</button> */}
      <Search handleWine={handleWine}  />
      <WineGrid>
        {wine && wine.map((w, i) => w && <Wine key={i} wine={w} />)}
        {wine && wine.length < 3 && <Loader />} 
      </WineGrid>
    </div>
  )
}

export default App
