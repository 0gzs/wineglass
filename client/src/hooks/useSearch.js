import { useState, useCallback } from "react";
import { fetchByDesc, fetchByName } from "../helperFunctions";

const useSearch = () => {
  const [wine, setWine] = useState()
  const [nothingFound, setNothingFound] = useState(false)
  const [searchBy, setSearchBy] = useState('name')

  const fetchCallback = useCallback(async query => {
    let response = searchBy == 'desc' ? (
      await fetchByDesc(query)
    ) : await fetchByName(query)
    setWine(response.data)
    if (response.data.length < 1) setNothingFound(true)
  })

  const handleToggle = selected => setSearchBy(selected)

  return [wine, searchBy, nothingFound, handleToggle, fetchCallback]
}

export default useSearch
