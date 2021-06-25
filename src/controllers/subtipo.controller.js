'use strict'
var db = require('./../bdd.coneccion');
function crudSubTipo(req, res, next) {
    console.log([req.body.idsubtipo, req.body.idtipo, req.body.nombre, req.body.idsubtipo]);
    var SQL = 'select * from  fun_ime_tipo($1, $2, $3, $4, $5);';
    db.any(SQL, [req.body.idsubtipo, req.body.idtipo, req.body.nombre, req.body.idsubtipo, req.body.estado])
        .then(function(data) {
            res.status(200)
                .json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
}

function getAllMarcas(req, res, next) {
    var SQL = 'select * from marca;';
    db.any(SQL, [])
        .then(function(data) {
            res.status(200)
                .json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
}

function getCategorialByClasificacionId(req, res, next) {
    var SQL = 'select * from categoria where idclasificacion='+ req.params.idClasificacion+';';
    db.any(SQL, [])
        .then(function(data) {
            res.status(200)
                .json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
}

function getPresentacionByIdMarcaAndIdCategoria(req, res, next) {
    console.log([req.params.idCategoria, req.params.idMarca])
    var SQL = 'select * from presentacion where idcategoria='+ parseInt(req.params.idCategoria)+' and '+ 'idmarca=' +parseInt(req.params.idMarca) +';';
    db.any(SQL, [])
        .then(function(data) {
            console.log(data);
            res.status(200)
                .json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
}

function getAllClasificaciones(req, res, next) {
    var SQL = 'select * from clasificacion;';
    db.any(SQL, [])
        .then(function(data) {
            res.status(200)
                .json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
}

function getAllCategorias(req, res) {
    var SQL = 'select * from categoria;';
    db.any(SQL, [])
        .then(function(data) {
            res.status(200)
                .json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
}


module.exports = {
    getAllCategorias,
    crudSubTipo,
    getAllMarcas,
    getCategorialByClasificacionId,
    getPresentacionByIdMarcaAndIdCategoria,
    getAllClasificaciones
};