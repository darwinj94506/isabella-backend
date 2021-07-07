const { generateError } = require('../helpers/generate.response');
const { api400Error, api404Error } = require('../error')
class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        if(Number.isInteger(id)){
            const result = await this.model.findAll({ where: this.generateQuery(id) });
            if(result.length === 0){
                console.log(result);
                throw new api404Error('Error del cliente', 'El recurso solicitado no ha sido encontrado')
            }
            return result
        }
        throw new api400Error('Error de Formato','El Id enviado debe ser un entero')
    }

    async getAll() {
        return await this.model.findAll();
    }

    async create(entity) {
        return await this.model.create(entity)
    }

    async update(body, id) {
        if(Number.isInteger(id)) {
            const result = await this.model.update(body, {where: this.generateQuery(id)})
            if(result[0]>0) {
                return true
            } else {
                throw new api404Error('Error del cliente', 'Recurso no encontrado')
            }
        } else {
            throw new api400Error('Error de Formato', 'El Id enviado debe ser un entero')
        }   
    }

    async delete(id) {
        if(Number.isInteger(id)) {
            const result = await this.model.destroy({ where: this.generateQuery(id) });
            if(result >0 )
                return true
            else 
                throw new api400Error('Error de solicitud', 'No se pudo eliminar, no existe este/a '+this.model.tableName) 
        }else{
            throw new api400Error('Error de Formato', 'El Id enviado debe ser un entero')
        }
    }

        
    generateQuery(value){
        const query = {};
        query[this.model.primaryKeyAttribute] = value
        return query;
    }
}

module.exports = BaseRepository; 
