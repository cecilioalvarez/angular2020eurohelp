const express = require('express')
const app = express()
const port = 3000

let libros=[];
let libro1= {isbn:"1",titulo:"java",autor:"juan",precio:20};
libros.push(libro1)

app.get('/', (req, res) => {
  res.send(libros)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})