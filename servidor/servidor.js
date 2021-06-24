const express = require('express')
var cors=require("cors");
const app = express()
//libreria de tokens
const jwt= require("jsonwebtoken");
// la integracion con express
const expressJwt= require("express-jwt");

app.use(expressJwt({secret:"superclave",algorithms: ['HS256']})
.unless({path :["/login"]}))
app.use(cors())

app.use(express.json());
const port = 3000

let libros=[];
let libro1= {isbn:"1",titulo:"java",autor:"juan",importe:20};
let libro4= {isbn:"4",titulo:"javita",autor:"juan",importe:20};


libros.push(libro1,libro4)

app.post("/login",function(req,res) {

    const usuario= req.body;

    if (usuario.nombre=="ceci" && usuario.clave=="ceci") {

      var token= jwt.sign({id:usuario.nombre},'superclave',{expiresIn:'2h'});
      res.send({token:token});
    }else {
      res.sendStatus(401);
    }

});




app.get('/libros', (req, res) => {
  res.send(libros)
})

app.get('/libros/filtro/:titulo', (req, res) => {
  // me busca en el array de javascript el elemento con ese isbn
  let listaFiltro=libros.filter(function (elemento) {

      return elemento.titulo.startsWith(req.params.titulo);
  })

  res.send(listaFiltro);
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