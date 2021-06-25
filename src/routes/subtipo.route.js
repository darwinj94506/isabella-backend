var express = require('express');
var router = express.Router();
var SubTipoController = require('./../controllers/subtipo.controller');
// router.post('/findTipos', TipoController.findTipos);
// router.get('/getTipo/:id', TipoController.getTipo);
router.post('/crudTipo', SubTipoController.crudSubTipo);
router.get('/getAllClasificaciones', SubTipoController.getAllClasificaciones);
router.get('/getAllMarcas', SubTipoController.getAllMarcas);
router.get('/getCategoriasByClasificaciones/:idClasificacion', SubTipoController.getCategorialByClasificacionId);
router.get('/getPresentacionesByMarcaAndCategoria/:idCategoria/:idMarca', SubTipoController.getPresentacionByIdMarcaAndIdCategoria);
router.get('/allcategorias', SubTipoController.getAllCategorias);

// router.get('/getCategorias', TipoController.getTiposSelect);

module.exports = router;