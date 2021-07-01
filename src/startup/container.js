const { createContainer, asClass, asValue, asFunction } = require("awilix");

const config = require("../../config");
const app = require("./index");
 
const { ClasificacionModel } = require('../models');

const { ClasificacionRepository} = require("../repositories");

const { ClasificacionController } = require('../controllers');

const { ClasificacionRoutes } = require("../routes/index.routes");

const db = require('../data/models');

const { CreateClasificacionUseCase,
        DeleteClasificacionUseCase,
        GetByIdClasificacionUseCase,
        GetAllClasificacionUseCase,
        UpdateClasificacionUseCase } = require('../usecases/clasificacion')
const Routes = require("../routes"); 

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        db: asValue(db),
        config: asValue(config)
    })
    .register({
        ClasificacionRepository: asClass(ClasificacionRepository).singleton(),

    })
    .register({
        CreateClasificacionUseCase: asClass(CreateClasificacionUseCase).singleton(),
        UpdateClasificacionUseCase: asClass(UpdateClasificacionUseCase).singleton(),
        DeleteClasificacionUseCase: asClass(DeleteClasificacionUseCase).singleton(),
        GetByIdClasificacionUseCase: asClass(GetByIdClasificacionUseCase).singleton(),
        GetAllClasificacionUseCase: asClass(GetAllClasificacionUseCase).singleton(),
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