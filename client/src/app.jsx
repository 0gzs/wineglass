import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from './components/Slider.jsx'
import Loader from './components/Loader.jsx'
import Wine from './components/Wine.jsx'

const api = axios.create({
  baseURL: '/api'
})

function App() {
  const [links, setLinks] = useState(null)
  const [wine, setWine] = useState([])

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('links'))
    if (!items) {
      api.get('/links')
        .then(res => setLinks(res.data))
    } else {
      console.log("I didn't have to send a request for those links, sir.")
      setLinks(items)
    }
  }, [])

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('wine'))
    if (links && !items) {
      console.log("if statement")
      links.map(async link => {
        let response = await api.post('/links/getWine', { url: link })
        setWine(arr => [...arr, response.data[0]])
      })
    } else if (items && items.length !== wine.length) {
      console.log("I got them.")
      setWine(items)
    }
  }, [links])

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  }, [links])

  useEffect(() => {
    if (wine.length > 0) localStorage.setItem('wine', JSON.stringify(wine))
  }, [wine])

  return (
    <div className='container'>
      <Slider>
        {wine.map((w, i) => w && <Wine key={i} name={w.name} img={w.image} description={w.description} />)}
        {wine && wine.length < 3 && <Loader />} 
      </Slider>
    </div>
  )
}

export default App
