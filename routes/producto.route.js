var express = require('express');
var router = express.Router();
var ProductoController = require('./../controllers/producto.controller');

var multipart = require('connect-multiparty');
var md_upload=multipart({uploadDir:'./public/images'});
router.post('/upload_images',md_upload,ProductoController.uploadImage);
router.post('/subidaMasivaProductos', ProductoController.subidaMasivaProductos);
router.post('/getMaterialesSelect2', ProductoController.getMaterialesSelect2);
router.post('/findProductos', ProductoController.findProductos);
router.post('/crudProducto', ProductoController.crudProducto);
router.get('/findProductoByCodigoFabricante/:codigofabricante', ProductoController.findProductoByCodigoFabricante);
router.get('/findProductosByCodigoFabricante/:codigofabricante', ProductoController.findProductosByCodigoFabricante);


module.exports = router;