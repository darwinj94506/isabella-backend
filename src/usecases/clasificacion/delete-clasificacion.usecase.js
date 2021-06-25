_clasificacionRepository = null
class DeleteClasificacionUseCase{
    
    constructor({ClasificacionRepository}) {
        _clasificacionRepository = ClasificacionRepository
    }
    
    async execute(params){
        return await _clasificacionRepository.delete(params)
    }
}
module.exports = DeleteClasificacionUseCase