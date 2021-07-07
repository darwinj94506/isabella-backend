const api400Error  = require('./api400Error');
const { FAILURE } = require('../utils/status');

// const logger = require('../loggers/logger')
const BaseError = require('./baseError')
function logError (err) {
    // logger.error(err)
    console.log(err);
}
   
function logErrorMiddleware (err, req, res, next) {
    logError(err)
    next(err)
}
   
function returnError (err, req, res, next) {
    console.log(err.name)
    res.status(err.statusCode || 500)
        .json( {
            statusCode: err.statusCode || 500,         
            name: err.name,
            message: err.message,
            status: FAILURE,
            trace: err.trace
    })
}
   
function isOperationalError(error) {
    if (error instanceof BaseError) {
        return error.isOperational
    }
    return false
}
   
module.exports = {
    logError,
    logErrorMiddleware,
    returnError,
    isOperationalError
}