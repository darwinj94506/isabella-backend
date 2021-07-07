const { generateResponse, generateError } = require('../helpers/generate.response');
const { SUCCESS, FAILURE } = require('../utils/status');
let marcaRepository
class MarcaController {    
    constructor({ MarcaRepository}){
        marcaRepository = MarcaRepository;
    }

    async create(req, res){
        const body = req.body;
        const response = await marcaRepository
            .create({ ...body })
        res.status(200).json(generateResponse(200, 'Marca creada con éxito', response, SUCCESS))
    }

    async update(req, res){
        const { body, params} = req;
        await marcaRepository.update(body, params.id)
        res.status(200).json(generateResponse(200,'Marca Actualizada correctamente',[], SUCCESS))
    }

    async trueDelete(req, res){
        const { params } = req;
        await marcaRepository.delete(params.id)    
        res.status(200).json(generateResponse(200,'Eliminado Correctamente',[], SUCCESS))   
    }

    async delete(req, res){
        const { params } = req;
        await marcaRepository.update({ estado:0 }, params.id)    
        res.status(200).json(generateResponse(200,'Eliminado Correctamente',[], SUCCESS))   
    }

    async getById(req, res){
        const { params } = req;
        const  data = await marcaRepository.get(params.id) 
        res.status(200).json(generateResponse(200, undefined, data[0], SUCCESS))
    }

    async getAll(req, res){
        const data = await marcaRepository.getAll()        
        res.status(200).json(generateResponse(200, 'Consulta exitosa', data, SUCCESS))
    }
}

module.exports = MarcaController
