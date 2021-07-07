function generateResponse(statusCode, message = "acción realizada con éxito", data = [], status){
    return {
        statusCode,
        message,
        status,
        data
    }
}

function generateError(msg, statusCode){
    const error = new Error(msg)
    error.statusCode = statusCode;
    return error;
}

module.exports = { generateResponse, generateError }