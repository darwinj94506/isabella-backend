const { generateResponse } = require('../helpers/generate.response');
const { SUCCESS, FAILURE } = require('../utils/status');

let clasificacionRepository = null;
class ClasificacionController {    
    constructor({ClasificacionRepository}){
        clasificacionRepository = ClasificacionRepository
    }
    
    async create(req, res){
        const body = req.body;
        const response = await clasificacionRepository
            .create({ ...body })
        res.status(200).json(generateResponse(200, 'Clasificacion creada con éxito', response, SUCCESS))
    }

    async update(req, res){
        const { body, params} = req;
        await clasificacionRepository.update(body, params.id)
        res.status(200).json(generateResponse(200,'Clasificacion Actualizada correctamente',[], SUCCESS))
    }

    async delete(req, res){
        const { params } = req;
        await clasificacionRepository.update({ estado: 0}, params.id)    
        res.status(200).json(generateResponse(200,'Eliminado Correctamente',[], SUCCESS))   
    }

    async trueDelete(req, res){
        const { params } = req;
        await clasificacionRepository.delete(params.id)    
        res.status(200).json(generateResponse(200,'Eliminado Correctamente',[], SUCCESS))   
    }

    async getById(req, res){
        const { params } = req;
        const  data = await clasificacionRepository.get(params.id) 
        res.status(200).json(generateResponse(200, undefined, data[0], SUCCESS))
    }

    async getAll(req, res){
        const data = await clasificacionRepository.getAll()        
        res.status(200).json(generateResponse(200, 'Consulta exitosa', data, SUCCESS))
    }
}

module.exports = ClasificacionController
