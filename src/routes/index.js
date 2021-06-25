const express = require("express");
require("express-async-errors");
const { ErrorMiddleWare } = require("../middlewares");
module.exports = function({
  ClasificacionRoutes
}){
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes.use(express.json())
  apiRoutes.use("/clasificacion",ClasificacionRoutes);
  router.use("/v1/api", apiRoutes);
  router.use(ErrorMiddleWare);
  return router
}