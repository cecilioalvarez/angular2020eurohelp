const express = require('express')
var cors=require("cors");

const app = express()
app.use(cors())
const port = 3000

let libros=[];
let libro1= {isbn:"1",titulo:"java",autor:"juan",precio:20};
let libro2= {isbn:"2",titulo:"net",autor:"ana",precio:20};
let libro3= {isbn:"3",titulo:"c#",autor:"david",precio:30};

libros.push(libro1,libro2,libro3)

app.get('/libros', (req, res) => {
  res.send(libros)
})

app.delete('/libros/:isbn', (req, res) => {
  // me busca en el array de javascript el elemento con ese isbn
  let seleccionado=libros.filter(function (elemento) {

      return elemento.isbn==req.params.isbn;
  })[0];

  let indice= libros.indexOf(seleccionado);
  libros.splice(indice,1);
  res.status(204).send();
})
 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})