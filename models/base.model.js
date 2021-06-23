var db = require('../bdd.coneccion');
class ModelBase {    
    async crud(sqlSentence, params) {
        return await db.any(sqlSentence, [...params])
    }

    async getById(sqlSentence, param) {
        return await db.any(sqlSentence, param)
    }

    async getAll(sqlSentence, nItems, npag) {
        return await db.any(sqlSentence, param)
    }
}

module.exports = ModelBase
