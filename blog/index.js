const express = require('express')
const app = express()
const port = 3000

app.get('/dm', (req, res) => {
  res.send('dmm!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})