const BaseModel = require('./base.model');
class ClasificacionModel extends BaseModel {
    TABLE = 'clasificacion'
    COLUMNS = ['idclasificacion','nombre']
    GET_ALL = 'select * from clasificacion;'
    CRUD = 'select * from fun_ime_clasificacion($1, $2, $3);'
    GET_BY_ID = 'select * from clasificacion where idclasificacion = $1'
}
module.exports = ClasificacionModel
const h = ``