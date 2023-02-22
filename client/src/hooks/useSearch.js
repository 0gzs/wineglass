import axios from "axios"
import { useCallback, useState } from "react"

const useSearch = (resultsHandler) => {
  const [results, setResults] = useState()
  const [strict, setStrict] = useState(false)
  const [empty, setEmpty] = useState(false)

  const [type, setType] = useState(null)
  const [region, setRegion] = useState(null)
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState('')
  

  const handler = useCallback((name, value) => {
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
  }, [setType])

  const submit = async e => {
    e.preventDefault()
    setEmpty(false)
    const keywords = description.split(',')

    const wineData = {}
    if (type) wineData['type'] = type
    if (region) wineData['region'] = region
    if (rating) wineData['rating'] = rating
    if (keywords.length > 0) wineData['description'] = keywords

    try {
      const response = await axios.post('/wine/api/main-search', { wineData: wineData, strict: strict })
      resultsHandler(response.data.data)
      if (response.data.data.length == 0) setEmpty(true)
      else setEmpty(false)
    } catch (err) {
      console.log(err)
    }
  }

  return { results, description, handler, submit, empty, strict, setStrict }
}

export default useSearch
