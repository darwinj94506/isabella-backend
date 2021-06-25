const BaseRepository = require('./base.repository');

class ClasificacionRepository extends BaseRepository {
    constructor({ClasificacionModel}){
        super(ClasificacionModel)
    }
}

module.exports = ClasificacionRepository
