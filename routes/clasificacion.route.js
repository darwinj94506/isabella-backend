var express = require('express');
module.exports = function({ClasificacionController}) {
    const router = express.Router();
    router.post('/', ClasificacionController.create);
    return router;
}