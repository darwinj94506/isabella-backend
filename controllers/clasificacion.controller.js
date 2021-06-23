const { CreateCaseUse } = require('../usecases/clasificacion')
class ClasificacionController{    
    async create(req, res){
        const params = req.body;
        const resDB = await CreateCaseUse.execute([params.idclasificacion, params.nombre])
        if(resDB[0]){
            res.status(200).send(resDB[1])
        }else{
            res.status(500).send(resDB[1])
        }
    }
}

module.exports = ClasificacionController
