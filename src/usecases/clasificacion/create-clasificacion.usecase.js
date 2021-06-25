_clasificacionRepository = null
class CreateClasificacionUseCase{
    
    constructor({ClasificacionRepository}) {
        _clasificacionRepository = ClasificacionRepository
    }
    
    async execute(params){
        return await _clasificacionRepository.create(params)
    }
}
module.exports = CreateClasificacionUseCase