const  { generateError } = '../helpers/generate.response';
module.exports = (req, res, next) => 
res.status(404).json(
    {
        info: {
            statusCode: 404,
            message: "Recurso no encontrado, error en la URL",
            success: false
        }
    }
 )