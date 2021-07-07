const { param } = require('express/lib/router');
var db = require('../../bdd.coneccion');
class BaseRawSqlRepository {
    constructor(model){
        this.model = model
    }

    async create(params) {
        return (await db.any(this.model.CRUD, [...params, 1]))[0]
    }

    async update(params) {
        return (await db.any(this.model.CRUD, [...params, 2]))[0]
    }

    async delete(id) {
        return (await db.any(this.model.CRUD, [id, '', 3]))[0]
    }

    async getById(id) {
        return (await db.any(this.model.GET_BY_ID, id))[0]
    }

    async getAll() {
        return (await db.any(this.model.GET_ALL))
    }

    async getAllPaginate(nItems, npag) {
        return await db.any(sqlSentence, param)
    }
}

module.exports = BaseRawSqlRepository
