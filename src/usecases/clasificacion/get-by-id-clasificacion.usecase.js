_clasificacionRepository = null
class GetByIdClasificacionUseCase {
    
    constructor({ClasificacionRepository}) {
        _clasificacionRepository = ClasificacionRepository
    }
    
    async execute(params){
        return await _clasificacionRepository.get(params)
    }
}
module.exports = GetByIdClasificacionUseCase