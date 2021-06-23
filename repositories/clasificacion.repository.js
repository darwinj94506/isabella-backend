const ClasificacionModel = require('../models/clasificacion.model');
const BaseRepository = require('./base.repository');

class ClasificacionRepository extends BaseRepository {
    constructor({ClasificacionModel}){}
}

module.exports = ClasificacionRepository
