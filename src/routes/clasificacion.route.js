var express = require('express');
module.exports = function({ClasificacionController}) {
    const router = express.Router();
    router.post('/', ClasificacionController.create);
    router.put('/', ClasificacionController.update);
    router.delete('/', ClasificacionController.delete);
    return router;
}