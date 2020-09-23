const express = require('express');
const routes = require('./routes');
const { route } = require('./routes');
const app  = express();

app.use(routes);
app.use(express.json());




app.listen(3333, ()=>{
  console.log('Subindo o servidor');
  console.log('O servidor está rodando na  porta http://localhost:3333');
})