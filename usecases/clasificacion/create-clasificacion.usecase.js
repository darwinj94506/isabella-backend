class CreateClasificacionUseCase{
    
    constructor({ClasificacionRepository}) {}
    
    async execute(params){
        return await ClasificacionRepository.create(params)
    }
}
module.exports = CreateClasificacionUseCase