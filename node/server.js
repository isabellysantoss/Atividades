
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  
  res.send('Olá mundo!')
})


app.listen(3000, () => {
  console.log('Server online')
})




app.get('/sobre', (req, res) => {
    res.send("Um simples tutorial de NodeJS")
  })

  