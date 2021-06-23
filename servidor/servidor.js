const express = require('express')
var cors=require("cors");
const app = express()
app.use(cors())
app.use(express.json());
const port = 3000

let libros=[];
let libro1= {isbn:"1",titulo:"java",autor:"juan",importe:20};
let libro2= {isbn:"2",titulo:"net",autor:"ana",importe:20};
let libro3= {isbn:"3",titulo:"c#",autor:"david",importe:30};

libros.push(libro1,libro2,libro3)

app.get('/libros', (req, res) => {
  res.send(libros)
})

app.get('/libros/:isbn', (req, res) => {
  // me busca en el array de javascript el elemento con ese isbn
  let seleccionado=libros.filter(function (elemento) {

      return elemento.isbn==req.params.isbn;
  })[0];

  res.send(seleccionado);
})

app.post('/libros',function(req,res) {
  // hazme un log en la consola del objeto libro que paso desde angualr
    libros.push(req.body);
    res.status(201).send();
})

app.put('/libros/:isbn', (req, res) => {
  // me busca en el array de javascript el elemento con ese isbn
  let seleccionado=libros.filter(function (elemento) {

      return elemento.isbn==req.params.isbn;
  })[0];

  let indice= libros.indexOf(seleccionado);
  libros[indice]=req.body;
  res.status(200).send();
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