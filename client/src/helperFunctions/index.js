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

export const fetchByDesc = async (query) => {
  try {
    const res = await axios.post('/wine/api/desc', { query: query })
    return res.data
  } catch (err) {
    console.log({ error: err })
  }
}

export const fetchByName = async (name) => {
  try {
    const res = await axios.post('/wine/api/name', { query: name })
    return res.data
  } catch (err) {
    console.log({ error: err })
  }
}
