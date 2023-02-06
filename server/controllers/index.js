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

exports.getWineByDesc = async (req, res, next) => {
  const { query } = req.body
  const [rows] = await pool.query(`SELECT * FROM wine WHERE LOCATE(?, description) > 0;`, query)
  res.status(200).json({
    status: 'success',
    length: rows?.length,
    data: rows
  })
}

exports.getWineByName = async (req, res, _) => {
  const { query } = req.body 
  const [rows] = await pool.query(`SELECT * FROM wine WHERE LOCATE(?, name) > 0`, query)
  res.status(200).json({
    status: 'success',
    length: rows?.length,
    data: rows
  })
} 
