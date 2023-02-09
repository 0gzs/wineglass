import { useState, useEffect, useCallback } from "react";
import { fetchByDesc, fetchByName } from "../helperFunctions";

const useSearch = () => {
  const [wine, setWine] = useState()
  const [searchBy, setSearchBy] = useState('name')

  const fetchCallback = useCallback(async query => {
    let response = searchBy == 'desc' ? (
      await fetchByDesc(query)
    ) : await fetchByName(query)
    setWine(response.data)
  })

  const handleToggle = selected => setSearchBy(selected)

  return [wine, searchBy, handleToggle, fetchCallback]
}

export default useSearch
