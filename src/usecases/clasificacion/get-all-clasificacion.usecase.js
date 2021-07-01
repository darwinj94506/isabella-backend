_clasificacionRepository = null
class GetAllClasificacionUseCase {
    
    constructor({ClasificacionRepository}) {
        _clasificacionRepository = ClasificacionRepository
    }
    
    async execute(){
        return await _clasificacionRepository.getAll()
    }
}
module.exports = GetAllClasificacionUseCase