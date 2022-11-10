const { response } =require('express');

const usuariosGet = function (req, res=response) {
    const {q,nombre="none", apikey} = req.query;
    res.json({
        msg: 'get Api = controlador',
        q,nombre,apikey
    });
}


const usuariosPost = function (req, res=response) {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    });
  }

  const usuariosPut = function (req, res=response) {
    const {id, nombre} = req.params.id;
    res.json({
        msg: 'put API',
        id,
        nombre
    });
  }

  const usuariosDelete = function (req, res=response) {
    res.json({
        msg: 'delete API'
    });
  }

  const usuariosPatch = function (req, res=response) {
    res.json({
        msg: 'patch API'
    });
}
module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
};