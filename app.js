const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/error', (req, res) => {
  res.status(418);
  res.set('X-Custom', 'whoop');
  res.send('Error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
