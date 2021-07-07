var express = require('express');
const { ParseIntMiddleware } = require('../middlewares')

module.exports = function({ClasificacionController}) {
    const router = express.Router();
    router.get('/',ClasificacionController.getAll);
    router.get('/:id', ParseIntMiddleware, ClasificacionController.getById);
    router.post('/', ClasificacionController.create);
    router.put('/:id', ParseIntMiddleware, ClasificacionController.update);
    router.delete('/:id', ParseIntMiddleware, ClasificacionController.delete);
    router.delete('/trueDelete/:id', ParseIntMiddleware, ClasificacionController.trueDelete);
    return router;
}