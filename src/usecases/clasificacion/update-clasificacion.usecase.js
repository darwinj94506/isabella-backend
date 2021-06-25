_clasificacionRepository = null
class UpdateUseCase {
    
    constructor({ClasificacionRepository}) {
        _clasificacionRepository = ClasificacionRepository
    }
    
    async execute(params){
        return await _clasificacionRepository.update(params)
    }
}
module.exports = UpdateUseCase