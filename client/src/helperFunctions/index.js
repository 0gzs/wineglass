import axios from "axios"

const postWine = async wine => {
  if (!wine) return
  try {
    const data = await axios.post('/wine/api', {
      name: wine.name,
      price: wine.price,
      base_price: wine.base_price,
      image: wine.image,
      rating: wine.rating,
      description: wine.description,
      on_hand: wine.on_hand,
      sku: wine.SKU,
      type: wine.type,
      brand: wine.brand,
      region: wine.region,
      size: wine.size,
      country: wine.country,
      appellation: wine.appellation
    })
    return data
  } catch (err) {
    console.log({ error: err })
  }
}

export const saveWine = async wineArr => {
  for (let i = 0; i < wineArr.length; i++) {
    const response = await postWine(wineArr[i])
    console.log(response)
  }
}

const getWine = async (query) => {
  try {
    const data = await axios.post('/wine/api/like', { query: query })
    return data
  } catch (err) {
    console.log({ error: err })
  }
}

export const searchQuery = async (query, type) => {
  const response = await getWine(query)
  return response.data
}
