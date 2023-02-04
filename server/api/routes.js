const puppeteer = require('puppeteer')

const start = async () => {
  const browser = await puppeteer.launch()
  let page = await browser.newPage()
  await page.setDefaultNavigationTimeout(50000);

  return page
}

const getWineLinksFromPage = async () => {
  let page = await start()
  await page.goto('https://www.bevmo.com/shop/wine/d/897432#!/?page=14', { "waitUntil": "networkidle0" })
  return await page.evaluate(() =>
    Array.from(document.querySelectorAll('#products .fp-item-container'), e => (
      e.querySelector('.fp-item-content .fp-item-image a').href
    ))
  )
}

const getWineData = async link => {
  let page = await start()
  await page.goto(link, { "waitUntil": "networkidle0" })

  return await page.evaluate(() => {
    try {
      return Array.from(document.querySelectorAll('#products .fp-row-details'), e => ({
        name: e.querySelector('.fp-col-item-details h1').innerText || '',
        price: e.querySelector('.fp-col-item-details .fp-item-sale-price').innerText || '',
        base_price: e.querySelector('.fp-col-item-details .fp-item-base-price').innerText || '',
        image: e.querySelector('.fp-col-item-image .fp-item-image img').src || '',
        rating: e.querySelector('.fp-col-item-details .fp-review-rating').innerText || '',
        description: e.querySelector('.fp-col-item-details .fp-item-description-content').children[1].innerText || '',
        on_hand: e.querySelector('.fp-col-item-details .fp-item-quantity-on-hand').innerText || '',
        SKU: e.querySelector('.fp-item-description .fp-item-upc .fp-item-tag-value').innerText || '',
        type: e.querySelector('.fp-item-description .fp-product-tags').children[1].children[1].children[0].innerText || '',
        brand: e.querySelector('.fp-item-description .fp-product-tags').children[2].children[1].children[0].innerText || '',
        region: e.querySelector('.fp-item-description .fp-product-tags').children[3].children[1].children[0].innerText || '',
        size: e.querySelector('.fp-item-description .fp-product-tags').children[4].children[1].children[0].innerText || '',
        country: e.querySelector('.fp-item-description .fp-product-tags').children[5].children[1].children[0].innerText || '',
        appellation: e.querySelector('.fp-item-description .fp-product-tags').children[6].children[1].children[0].innerText || ''
      }))
    } catch (err) {
      console.log(err)
    }
  })
}

module.exports = (() => {
  'use strict'
  let router = require('express').Router()

  router.get('/links', async (_, res) => {
    let links = await getWineLinksFromPage()

    return res.json(links)
  })

  router.post('/links/getWine', async (req, res) => {
    console.log('heller')
    try {
      let wine = await getWineData(req.body.url)
      return res.json(wine)
    } catch(error) {
      return null
    }  
  })

  return router
})()
