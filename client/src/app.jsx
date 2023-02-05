import React, { useEffect, useState } from 'react'

import Search from './pages/search.jsx'
import WineGrid from './components/WineGrid.jsx'
import Loader from './components/Loader.jsx'
import Wine from './components/Wine.jsx'
import { saveWine } from './helperFunctions/index.js'

function App() {
  const [wine, setWine] = useState([])

  return (
    <div className='container'>
      {/*<button style={{ margin: "1vw", width: '95%' }} onClick={() => saveWine(wine)}>Save these Wine</button>
      <WineGrid>
        {wine.map((w, i) => w && <Wine key={i} name={w.name} img={w.image} description={w.description} />)}
        {wine && wine.length < 3 && <Loader />} 
      </WineGrid>*/}
      <Search />
    </div>
  )
}

export default App
