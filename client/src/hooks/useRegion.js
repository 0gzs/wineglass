import { useState } from 'react'
const useRegion = () => {
  const regionsArr = [
    'New Mexico',
    'California',
    'Vaneto',
    'Champagne',
    'Trentino Alto Adige',
    'Vin de France',
    'Rhone Valley',
    'Chile',
    'Washington',
    'Mendoza',
    'Tuscany',
    'Catalunya',
    'Burgundy',
    'Italy',
    'Multi-Region',
    'La Rioja',
    'Oregon',
    'Umbria',
    'Loire Valley',
    'Languedoc-Roussillon',
    'Lombardy',
    'Rapel Valley',
    'Bordeaux',
    'Peidmont',
    'Vinho Verde',
    'Kansai',
    'Mosel',
    'Provence',
    'Mosel Saar Ruwer',
    'Landuedoc',
    'South Eastern Autralia',
    'Porto',
    'Madeira',
    'New York',
    'San Antonio Valley'
  ]
  const [regionSelected, setRegionSelected] = useState(null)

  const regionsHandler = region => setRegionSelected(region) 

  return { regionsArr, regionsHandler, regionSelected }
}

export default useRegion
