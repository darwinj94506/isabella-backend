_clasificacionRepository = null
class GetByIdClasificacionUseCase {
    
    constructor({ClasificacionRepository}) {
        _clasificacionRepository = ClasificacionRepository
    }
    
    async execute(params){
        return await _clasificacionRepository.getById(params)
    }
}
module.exports = GetByIdClasificacionUseCase