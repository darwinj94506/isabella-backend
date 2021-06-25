let _createUsecase = null
let _updateUsecase = null
let _deleteUsecase = null
class ClasificacionController {    
    constructor({ CreateClasificacionUseCase, 
                  UpdateClasificacionUseCase,
                  DeleteClasificacionUseCase 
                }){
        _createUsecase = CreateClasificacionUseCase
        _updateUsecase = UpdateClasificacionUseCase
        _deleteUsecase = DeleteClasificacionUseCase
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
        console.log([status, message])
        if(status){
            res.status(200).send({ status: 200, message })
        }else{
            throw new Error(message)
        }
    }

    async delete(req, res){
        const params = req.body;
        const { status, message } = await _deleteUsecase.execute(params.idclasificacion)
        if(status){
            res.status(200).send({ status: 200, message })
        }else{
            throw new Error(message)
        }
    }

}

module.exports = ClasificacionController
