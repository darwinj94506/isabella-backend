let _createUsecase , _updateUsecase, _deleteUsecase, _geyByIdUseCase, _getAllUseCase = null
class CategoriaService {
    constructor({
        CreateClasificacionUseCase, 
        UpdateClasificacionUseCase,
        DeleteClasificacionUseCase,
        GetByIdClasificacionUseCase,
        GetAllClasificacionUseCase 
    }){
        _createUsecase = CreateClasificacionUseCase
        _updateUsecase = UpdateClasificacionUseCase
        _deleteUsecase = DeleteClasificacionUseCase
        _geyByIdUseCase = GetByIdClasificacionUseCase
        _getAllUseCase = GetAllClasificacionUseCase
    }

    



}

module.exports = CategoriaService