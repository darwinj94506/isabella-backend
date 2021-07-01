let _createUsecase , _updateUsecase, _deleteUsecase, _geyByIdUseCase, _getAllUseCase = null
class ClasificacionController {    
    constructor({ CreateClasificacionUseCase, 
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
    async create(req, res){
        const params = req.body;
        const { status, message } = await _createUsecase.execute([params.idclasificacion, params.nombre])
        if(status){
            res.status(200).send({ status: 200, message })
        }else{
            throw new Error(message)
        }
    }

    async update(req, res){
        const params = req.body;
        const { status, message } = await _updateUsecase.execute([params.idclasificacion, params.nombre])
        if(status){
            res.status(200).json({ status: 200, message })
        }else{
            throw new Error(message)
        }
    }

    async delete(req, res){
        const params = req.body;
        const { status, message } = await _deleteUsecase.execute(params.idclasificacion)
        if(status){
            res.status(200).json({ status: 200, message })
        }else{
            throw new Error(message)
        }
    }

    async getById(req, res){
        const id = req.params.id
        const  data = await _geyByIdUseCase.execute(id)
        if(data){
            res.status(200).json({ data, status: 200, message: 'succesfully requested' })
        }else{
            throw new Error('Not found data with this Id')
        } 
    }

    async getAll(req, res){
        const data = await _getAllUseCase.execute()
        
        if(data){
            res.status(200).json({ data, status: 200, message: 'succesfully requested' })
        }else{
            throw new Error('Not found')
        } 

    }

}

module.exports = ClasificacionController
