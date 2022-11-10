const express = require('express')
var cors = require('cors')

class Server{
  constructor(){
   this.app = express();
   this.port = process.env.PORT;
   this.usuariosPath='/api/usuarios';

   //middlewares
   this.middlewares();

   //Rutas aplicacion
   this.routes();
  }

  middlewares(){
    this.app.use(cors());
    //lectura y parseo
    this.app.use(express.json());

    this.app.use(express.static('public'));
  }

  routes(){
   this.app.use( this.usuariosPath, require('../routes/users'));
  
  }

  listen(){
    this.app.listen(this.port,() =>{
      console.log('Server corriendo en el puerto: ', this.port);
    });

  }
}

module.exports =Server;