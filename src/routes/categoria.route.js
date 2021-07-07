var express = require('express');
const { ParseIntMiddleware } = require('../middlewares')

module.exports = function({CategoriaController}) {
    const router = express.Router();
    router.get('/',CategoriaController.getAll);
    router.get('/:id', ParseIntMiddleware, CategoriaController.getById);
    router.post('/', CategoriaController.create);
    router.put('/:id', ParseIntMiddleware, CategoriaController.update);
    router.delete('/:id', ParseIntMiddleware, CategoriaController.delete);
    router.delete('/trueDelete/:id', ParseIntMiddleware, CategoriaController.trueDelete);

    return router;
}