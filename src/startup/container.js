const { createContainer, asClass, asValue, asFunction } = require("awilix");
const config = require("../../config");
const app = require("./index");
const { ParseIntMiddleware } = require('../middlewares');
const { 
    ClasificacionRepository,
    CategoriaRepository,
    MarcaRepository
} = require("../repositories");

const { 
    ClasificacionController, 
    CategoriaController,
    MarcaController
} = require('../controllers');

const { ClasificacionRoutes, 
        CategoriaRoutes, 
        MarcaRoutes } = require("../routes/index.routes");
const db = require('../data/models');

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
        Clasificacion: asValue(db.Clasificacion),
        Categoria: asValue(db.Categoria),
        Marca: asValue(db.Marca)
    })
    .register({
        ClasificacionRepository: asClass(ClasificacionRepository).singleton(),
        CategoriaRepository: asClass(CategoriaRepository).singleton(),
        MarcaRepository: asClass(MarcaRepository).singleton()
    })
    .register({
        ClasificacionController: asClass(ClasificacionController.bind(ClasificacionController)).singleton(),
        CategoriaController: asClass(CategoriaController.bind(CategoriaController)).singleton(),
        MarcaController: asClass(MarcaController.bind(MarcaController)).singleton()
    })
    .register({
        ClasificacionRoutes: asFunction(ClasificacionRoutes).singleton(),
        CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
        MarcaRoutes: asFunction(MarcaRoutes).singleton()
    })
    .register({
        ParseIntMiddleware: asFunction(ParseIntMiddleware).singleton()
    })
    
module.exports = container;