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
  const { strict } = req.body

  const { type, region, rating, description } = wineData

  if (type) query += ` WHERE type = '${type}'`

  if (!type && region) query += ` WHERE region = '${region}'`
  if (type && region && strict) query += ` AND region = '${region}'`
  if (type && region && !strict) query += ` OR region = '${region}'`

  if (!type && !region && rating) query += ` WHERE rating = '${rating}'`
  if ((type || region) && rating && strict) query += ` AND rating = '${rating}'`
  if ((type || region) && rating && !strict) query += ` OR rating = '${rating}'`

  if (description && description[0] != '') 
  description.forEach((desc, i) => {
    if (i == 0 && (type || region || rating)) {
      query += ` AND LOCATE('${desc}', description)`
      return
    } else if (i == 0 && (!type && !rating && !region) || !strict) {
      query += ` WHERE description LIKE '%${desc}%'`
    } else {
      query += ` OR LOCATE('${desc}', description)`
    }
  })

  query += ';'

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










