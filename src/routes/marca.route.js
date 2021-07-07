var express = require('express');
const { ParseIntMiddleware } = require('../middlewares')
module.exports = function({MarcaController}) {
    const router = express.Router();
    router.get('/',MarcaController.getAll);
    router.get('/:id', ParseIntMiddleware, MarcaController.getById);
    router.post('/', MarcaController.create);
    router.put('/:id', ParseIntMiddleware, MarcaController.update);
    router.delete('/:id', ParseIntMiddleware ,MarcaController.delete);
    router.delete('/trueDelete/:id', ParseIntMiddleware ,MarcaController.trueDelete);

    return router;
}