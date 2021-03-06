const { generateResponse, generateError } = require('../helpers/generate.response');
const { SUCCESS, FAILURE } = require('../utils/status');

let categoriaRepository
class CategoriaController {    
    constructor({ CategoriaRepository}){
        categoriaRepository = CategoriaRepository;
    }
    async create(req, res){
        const body = req.body;
        const response = await categoriaRepository
            .create({ ...body })
        res.status(200).json(generateResponse(200, 'Clasificacion creada con éxito', response, SUCCESS))
    }

    async update(req, res){
        const { body, params} = req;
        await categoriaRepository.update(body, params.id)
        res.status(200).json(generateResponse(200,'Clasificacion Actualizada correctamente',[], SUCCESS))
    }

    async delete(req, res){
        const { params } = req;
        await categoriaRepository.update({ estado: 0 }, params.id)    
        res.status(200).json(generateResponse(200,'Eliminado Correctamente',[], SUCCESS))   
    }
    async trueDelete(req, res){
        const { params } = req;
        await categoriaRepository.delete(params.id)    
        res.status(200).json(generateResponse(200,'Eliminado Correctamente',[], SUCCESS))   
    }

    async getById(req, res){
        const { params } = req;
        const  data = await categoriaRepository.get(params.id) 
        res.status(200).json(generateResponse(200, undefined, data[0], SUCCESS))
    }

    async getAll(req, res){
        const data = await categoriaRepository.getAll()        
        res.status(200).json(generateResponse(200, 'Consulta exitosa', data, SUCCESS))
    }
 
}

module.exports = CategoriaController
