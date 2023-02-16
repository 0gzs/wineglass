import { useState } from 'react'

const useType = () => {
  const typesArr = [
    'Sparkling',
    'Chardonnay',
    'Other Reds',
    'Cabernet Sauvignon',
    'Pinot Noir',
    'Pinot Gris',
    'Sauvignon Blanc',
    'Rhone',
    'Zinfandel',
    'Merlot',
    'Malbec',
    'Blush',
    'Petice Sirah',
    'Beaujilais Villages',
    'Tempranillo',
    'Chianti',
    'Other Whites',
    'Barbera',
    'Bordeaux',
    'Sake',
    'Riesling',
    'Dessert',
    'Other Italian',
    'Vermouth',
    'Port',
    'Carbernet Franc',
    'Shiraz',
    'Gewurztraminer',
    'Burgundy'
  ]
  const [typeSelected, setTypeSelected] = useState('')

  const typesHandler = type => setTypeSelected(type)

  return { typesArr, typesHandler, typeSelected }
}

export default useType
