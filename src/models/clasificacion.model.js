class ClasificacionModel {
    TABLE = 'clasificacion'
    COLUMNS = ['idclasificacion','nombre', 'estado']
    GET_ALL = 'select * from clasificacion;'
    CRUD = 'select * from fun_ime_clasificacion($1, $2, $3);'
    GET_BY_ID = 'select * from clasificacion where idclasificacion = $1'
    
    getCrud(){
        return this.CRUD
    }
}
module.exports = new ClasificacionModel()
