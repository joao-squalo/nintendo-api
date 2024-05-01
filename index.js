const express = require('express')
const { getGamesBrazil, getGamesEurope, getGamesAmerica, getPrices } = require('nintendo-switch-eshop');
const app = express()
app.use(express.json());
const port = 3333

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Brasil', async (req, res) => {
  res.send(await getGamesBrazil())
})

app.get('/America', async (req, res) => {
  res.send(await getGamesAmerica())
})

app.get('/Europa', async (req, res) => {
  res.send(await getGamesEurope())
})

app.post('/Prices/:country', async (req, res) => {
  let country = req.params.country;
  res.send(await getPrices(country, req.body.nsuids));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})