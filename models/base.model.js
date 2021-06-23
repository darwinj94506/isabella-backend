var db = require('../bdd.coneccion');
let _model
class ModelBase {
    constructor(model){
        _model = model
    }

    async create(sqlSentence, params) {
        return await db.any(_model.CREATE, [...params])
    }

    async update(sqlSentence, params) {
        return await db.any(sqlSentence, [...params])
    }

    async delete(sqlSentence) {
        return await db.any(sqlSentence, [...params])
    }

    async getById(sqlSentence, param) {
        return await db.any(sqlSentence, param)
    }

    async getAll(sqlSentence) {
        return await db.any(sqlSentence, param)
    }

    async getAllPaginate(sqlSentence, nItems, npag) {
        return await db.any(sqlSentence, param)
    }
}

module.exports = ModelBase
