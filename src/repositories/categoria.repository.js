const BaseRepository = require('./base.repository');
const { api400Error, api404Error } = require('../error')

class CategoriaRepository extends BaseRepository {
    constructor({Categoria}){
        super(Categoria)
    }
    
    async get(id) {
        if(Number.isInteger(id)){
            const result =  await this.model.findAll({ 
                where: this.generateQuery(id),
                include: 'Clasificacion'
            });

            if(result.length === 0){
                console.log(result);
                throw new api404Error('Error del cliente', 'El recurso solicitado no ha sido encontrado')
            }
            return result
        }
        throw new api400Error('Error de Formato','El Id enviado debe ser un entero')
    }
}

module.exports = CategoriaRepository
