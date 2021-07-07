
_clasificacionRepository = null
class UpdateUseCase {
    
    constructor({ClasificacionRepository}) {
        _clasificacionRepository = ClasificacionRepository
    }
    
     execute(params){
        return _clasificacionRepository.update(params, params.idclasificacion)
    }
}
module.exports = UpdateUseCase