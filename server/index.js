const express = require('express')
const path = require('path')

const app = express()
const port = 3003

const webpack = require('webpack');
const config = require('../webpack.config.js');
const compiler = webpack(config, () => console.log("Running webpack --watch."));

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');



app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/../client/dist')))
app.use(express.json())

const router = require('./api/routes.js')
app.use('/api', router)

app.listen(port, () => console.log(`Listening on port ${port}`))
