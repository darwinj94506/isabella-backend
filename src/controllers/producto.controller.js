'use strict'
var db = require('./../bdd.coneccion');
var fs =require('fs');
 var path = require('path');

function findProductosByImportacion(req, res) {
    const queryParams = req.body;
    const filter = queryParams.filter || '',
        sortOrder = queryParams.sortOrder,
        pageNumber = parseInt(queryParams.pageNumber) || 0,
        pageSize = parseInt(queryParams.pageSize),
        idimportacion = queryParams.idimportacion;
    var nitems = pageNumber * pageSize;

    db.any('select p.codigo _codigo, p.codigofabricante _codigofabricante,p.descripcion _descripcion,ip.idimportacionproducto,ip.idproducto,ip.idimportacion,ip.cantidad from producto p  join importacion_producto ip on p.idproducto=ip.idproducto  where ip.idimportacion=' + idimportacion + 'LIMIT ' + pageSize + ' OFFSET ' + nitems)
        .then(function(data) {
            var items = data;
            db.any("select count(*)  from importacion_producto ip where ip.idimportacion=" + idimportacion)
                .then(function(total) {
                    res.status(200)
                        .json({
                            items: items,
                            totalCount: total[0].count
                        });
                })
                .catch(function(err) {
                    console.log(err);
                    res.status(400).json({
                        result: 'ERROR',
                        message: err
                    })
                });
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json({
                result: 'ERROR',
                message: err
            })
        });
}

function findProductoByCodigoFabricante(req, res) {
    const codigo = req.params.codigofabricante;
    console.log(codigo);
    db.any('SELECT * FROM producto p where p.codigofabricante=$1 and p.estado=1', [codigo])
        .then(function(data) {
            res.status(200).json(data[0])
        })
        .catch(function(err) {
            // console.log(err);
            res.status(400).json({
                result: 'ERROR',
                message: err[0]
            })
        });
}
/*esta funcion se utiliza para la parte de la facturacion (detalle.component)cuando se guarda todo el cuerpo de la factura se hace una 
consulta del stock de todos los productos de la factura para actualizar el stock de mercado libre con el stock actual de mi bdd
 */
function findProductosByCodigoFabricante(req, res) {
    const codigo = req.params.codigofabricante;
    console.log(codigo);
    db.any('SELECT * FROM producto_stock p where p.codigofabricante=$1', [codigo])
        .then(function(data) {
            res.status(200).json(data[0])
        })
        .catch(function(err) {
            // console.log(err);
            res.status(400).json({
                result: 'ERROR',
                message: err[0]
            })
        });
}


function findProductos(req, res) {
    const queryParams = req.body;
    const filter = queryParams.filter || '',
        sortOrder = queryParams.sortOrder,
        pageNumber = parseInt(queryParams.pageNumber) || 0,
        pageSize = parseInt(queryParams.pageSize);
    var nitems = pageNumber * pageSize;
    console.log([queryParams.idcategoria, queryParams.idmarca, queryParams.opcion])

    db.any('select * from findproductos($1,$2,$3)  LIMIT ' + pageSize 
        + ' OFFSET ' + nitems, [queryParams.idcategoria, queryParams.idmarca, queryParams.opcion])
        .then(function(data) {
            // console.log(data);
            var items = data;
            db.any("select count(*)  from findproductos($1,$2,$3)",[queryParams.idcategoria, queryParams.idmarca, queryParams.opcion])
            .then(function(total) {
                res.status(200)
                    .json({
                        items: items,
                        totalCount: total[0].count
                    });
            })
            .catch(function(err) {
                console.log(err);
                res.status(400).json({
                    result: 'ERROR',
                    message: err[0]
                })
            });
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json({
                result: 'ERROR',
                message: err[0]
            })
        });
}





function crudProducto(req, res, next) {
    console.log( [
        req.body.idproducto,
        req.body.idpresentacion,
        '',
        '',
        req.body.descripcion,
        req.body.pvp,     
        req.body.codigofabricante,
        [],
        req.body.iva,
        req.body.stock_minimo,
        req.body.talla,
        req.body.unidad_medida,
        req.body.cantidad,
        1,
        req.body.opcion
    ])
    var SQL = 'select * from  fun_ime_producto($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15);';
    db.any(SQL, [
            req.body.idproducto,
            req.body.idpresentacion,
            '',
            '',
            req.body.descripcion,
            req.body.pvp,     
            req.body.codigofabricante,
            [],
            req.body.iva,
            req.body.stock_minimo,
            req.body.talla,
            req.body.unidad_medida,
            req.body.cantidad,
            1,
            req.body.opcion
        ])
        .then(function(data) {
            res.status(200)
                .json(data[0]);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err[0])
        });
}

function getMaterialesSelect2(req, res, next) {
    console.log(db);
    db.any('select * from producto')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL tipos'
                });
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
}


 
function subidaMasivaProductos(req, res, next) {
    console.log(req.body)
    var cuerpo = req.body.data;
    console.log(cuerpo);
    var lista = '';
    for (var i in cuerpo) {
        lista += 'select ' + cuerpo[i].tipo + '::integer idtipo,' + cuerpo[i].descripcion + '::character varying descripcion,' + cuerpo[i].precio1 + '::numeric precio1,' + cuerpo[i].costo + '::numeric costo,'+  cuerpo[i].codigoFabricante + '::character varying codigofabricante';
        if (i == (cuerpo.length - 1)) {
            lista += ';';
        } else {
            lista += ' union ';
        }
        if (i == (cuerpo.length - 1)) {
            console.log(lista);
            db.any('select * from  fun_crear_productos($1, $2);', [lista, cuerpo.length])
                .then(function(data) {
                    res.status(200)
                        .json(data);
                })
                .catch(function(err) {
                    console.log(err);
                    res.status(500).json(err)
                });
        }
    }
}
  


//----------------------------------------------------------------------------------------


module.exports = {
    crudProducto: crudProducto,
    findProductos: findProductos,
    findProductoByCodigoFabricante: findProductoByCodigoFabricante,
    findProductosByImportacion: findProductosByImportacion,
    getMaterialesSelect2: getMaterialesSelect2,
    findProductosByCodigoFabricante:findProductosByCodigoFabricante,
    subidaMasivaProductos:subidaMasivaProductos
};
