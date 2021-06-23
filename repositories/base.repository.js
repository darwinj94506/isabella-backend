var db = require('../bdd.coneccion');
let _model
class BaseRepository {
    constructor(model){
        _model = model
    }

    async create(params) {
        return await db.any(_model.CRUD, [...params, 1])
    }

    async update(id) {
        return await db.any(_model.CRUD, [0, id, 2])
    }

    async delete(id) {
        return await db.any(_model.CRUD, [0, id, 3])
    }

    async getById(id) {
        return await db.any(_model.GET_BY_ID, id)
    }

    async getAll() {
        return await db.any(_model.GET_ALL)
    }

    async getAllPaginate(nItems, npag) {
        return await db.any(sqlSentence, param)
    }
}

module.exports = BaseRepository
