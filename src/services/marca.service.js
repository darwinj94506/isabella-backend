let marcaRepository ,
class MarcaService {
    constructor({ MarcaRepository }){
        marcaRepository = MarcaRepository
    }

    async create(marca){
        const  created = await marcaRepository.create(marca);
        return created  
    }

    async update(marca, idMarca){
        const  created = await marcaRepository.create(marca);
        return created  
    }

    



}

module.exports = MarcaService