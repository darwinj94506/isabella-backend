const express = require("express");
const { logError, isOperationalError} = require('../error/errorHandler')
let _express=null;
let _config = null;

class Server {
    constructor({config, router}){
        _config = config;
        _express = express().use(router);
    }

    start(){
        return new Promise(resolve=>{
            _express.listen(_config.PORT,()=>{
                console.log("ISABELLA APP RUNNING IN PORT:" + _config.PORT);
                process.on('uncaughtException', error => {
                    logError(error)
                    if (!isOperationalError(error)) {
                        process.exit(1)
                    }
                });
                process.on('unhandledRejection', err =>{
                    throw err
                })
                resolve();
            });
        })
    }
}

module.exports = Server;