import axios from "axios"
import { useState } from "react"

const useSearch = () => {
  const [wine, setWine] = useState()

  const [type, setType] = useState(null)
  const [region, setRegion] = useState(null)
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState('')
  
  const [empty, setEmpty] = useState(false)

  const handler = (name, value) => {
    switch (name) {
      case 'types':
        setType(value)
        break
      case 'region':
        setRegion(value)
        break
      case 'rating':
        setRating(value)
        break
      case 'desc':
        setDescription(value)
        break
      default:
        break
    }
  }

  const submit = async () => {
    setEmpty(false)
    const keywords = description.split(',')

    const wineData = {}
    if (type) wineData['type'] = type
    if (region) wineData['region'] = region
    if (rating) wineData['rating'] = rating
    if (keywords.length > 0) wineData['description'] = keywords

    try {
      const response = await axios.post('/wine/api/main-search', { wineData: wineData })
      setWine(response.data.data)
      if (response.data.data.length == 0) setEmpty(true)
      else setEmpty(false)
    } catch (err) {
      console.log(err)
    }
  }

  return { wine, description, handler, submit, empty }
}

export default useSearch
