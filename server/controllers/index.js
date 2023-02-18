const ServerError = require('../utils/ServerError')
const pool = require('../db')

exports.getWine = async (_, res, next) => {
  const [rows] = await pool.query("SELECT * FROM wine")
  res.status(200).json({
    status: "success",
    length: rows?.length,
    data: rows
  })
}

exports.addOneWine = async (req, res, next) => {
  const {
    name,
    price,
    base_price,
    image,
    rating,
    description,
    on_hand,
    sku,
    type,
    brand,
    region,
    size,
    country,
    appellation
  } = req.body
  const queryString = `
      INSERT INTO wine
      (name, price, base_price, image, rating, description, on_hand, sku, type, brand, region, size, country, appellation)
      VALUES 
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
  const [rows] = await pool.query(queryString, [
    name, price, base_price, image, rating, description, on_hand, sku, type, brand, region, size, country, appellation])
  res.status(200).json({
    status: 'success',
    length: rows?.length,
    data: rows
  })
}

exports.getWineBy = async (req, res, next) => {
  const { query, filterBy } = req.body
  const [rows] = await pool.query(`SELECT * FROM wine WHERE LOCATE(?, ${filterBy}) > 0;`, query)
  res.status(200).json({
    status: 'success',
    length: rows?.length,
    data: rows
  })
}

exports.findWine = async (req, res, _) => {
  let query = "SELECT * FROM wine "
  const { wineData } = req.body

  if (wineData.type) query += ` WHERE type = '${wineData.type}'`
  if (wineData.region) query += wineData.type ? ` AND region = '${wineData.region}'` : ` WHERE region = '${wineData.region}'`
  if (wineData.rating) query += wineData.region || wineData.type ? ` AND rating > '${wineData.rating}'` : ` WHERE rating > '${wineData.rating}';`
  if (wineData.description && wineData.description[0] != '') {
    wineData.description.forEach((desc, i) => {
      if (i > 0) query += ` OR LOCATE('${desc}', description)`

      if (i == 0 && !wineData.description && !wineData.rating && !wineData.type) ` WHERE LOCATE('${desc}', description)`  
    })
    query += ';'
  }

  const [rows] = await pool.query(query)
  res.status(200).json({
    status: 'success',
    length: rows?.length,
    data: rows
  })
}

exports.getTypes = async (_, res) => {
  const [rows] = await pool.query("SELECT DISTINCT type FROM wine;")
  res.status(200).json({
    status: 'success',
    length: rows?.length,
    data: rows
  })
}










