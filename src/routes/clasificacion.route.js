var express = require('express');
module.exports = function({ClasificacionController}) {
    const router = express.Router();
    router.get('/',ClasificacionController.getAll);
    router.get('/:id',ClasificacionController.getById);
    router.post('/', ClasificacionController.create);
    router.put('/', ClasificacionController.update);
    router.delete('/', ClasificacionController.delete);
    return router;
}