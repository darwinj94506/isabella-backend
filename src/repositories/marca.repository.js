const BaseRepository = require('./base.repository');

class MarcaRepository extends BaseRepository {
    constructor({Marca}){
        super(Marca)
    }
    
}

module.exports = MarcaRepository
