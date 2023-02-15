import { useState, useCallback } from "react";
import { fetchBy } from "../helperFunctions";

const useSearch = () => {
  const [wine, setWine] = useState()
  const [nothingFound, setNothingFound] = useState(false)
  const [searchBy, setSearchBy] = useState('name')

  const fetchCallback = useCallback(async (filterBy, query) => {
    console.log("callback")
    let response = await fetchBy(filterBy, query) 
    setWine(response.data)
    if (response.data.length < 1) setNothingFound(true)
  })

  const handleToggle = selected => setSearchBy(selected)

  return [wine, searchBy, nothingFound, handleToggle, fetchCallback]
}

export default useSearch
