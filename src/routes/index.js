const express = require("express");
const cors = require("cors");

// const logger = require('../loggers/logger')
// const httpLogger = require('../loggers/httpLogger')
const { logErrorMiddleware, returnError } = require('../error/errorHandler')
require("express-async-errors");
const { ErrorMiddleWare, NotFoundMiddleware, ParseIntMiddleware } = require("../middlewares");
module.exports = function({
  ClasificacionRoutes,
  CategoriaRoutes,
  MarcaRoutes
}){
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes.use(express.json())
  apiRoutes.use(cors())
  apiRoutes.use(ParseIntMiddleware)
  apiRoutes.use("/clasificaciones",ClasificacionRoutes);
  apiRoutes.use("/categorias",CategoriaRoutes);
  apiRoutes.use("/marcas", MarcaRoutes);
  router.use("/v1/api", apiRoutes);
  // router.use(httpLogger);
  // router.use(NotFoundMiddleware);
  // router.use(ErrorMiddleWare);
  router.use(logErrorMiddleware);
  router.use(returnError);
  
  return router
}