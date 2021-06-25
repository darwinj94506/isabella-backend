const { createContainer, asClass, asValue, asFunction } = require("awilix");

const config = require("../../config");

const app = require("./index");
 
const { ClasificacionModel } = require('../models');

const { ClasificacionRepository} = require("../repositories");

const { ClasificacionController } = require('../controllers');

const { ClasificacionRoutes } = require("../routes/index.routes");

const { CreateClasificacionUseCase,
        DeleteClasificacionUseCase,
        UpdateClasificacionUseCase } = require('../usecases/clasificacion')
const Routes = require("../routes"); 

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        ClasificacionRepository: asClass(ClasificacionRepository).singleton(),

    })
    .register({
        CreateClasificacionUseCase: asClass(CreateClasificacionUseCase).singleton(),
        UpdateClasificacionUseCase: asClass(UpdateClasificacionUseCase).singleton(),
        DeleteClasificacionUseCase: asClass(DeleteClasificacionUseCase).singleton()
    })
    .register({
        ClasificacionController: asClass(ClasificacionController.bind(ClasificacionController)).singleton(),
    })
    .register({
        ClasificacionRoutes: asFunction(ClasificacionRoutes).singleton(),
    })
    .register({
        ClasificacionModel: asValue(ClasificacionModel),
    })
    

module.exports = container;