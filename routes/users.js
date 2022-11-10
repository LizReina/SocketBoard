const { Router } = require('express');
const router = Router();
const { usuariosGet , usuariosPost,  usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarioControllers')
/* GET users listing. */
router.get('/', usuariosGet )


router.post('/', usuariosPost)


router.put('/:id',usuariosPut )

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router;