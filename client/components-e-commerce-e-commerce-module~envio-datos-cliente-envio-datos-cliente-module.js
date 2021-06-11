(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-e-commerce-e-commerce-module~envio-datos-cliente-envio-datos-cliente-module"],{

/***/ "./src/app/content/pages/components/e-commerce/_core/models/usuario.model.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/e-commerce/_core/models/usuario.model.ts ***!
  \***********************************************************************************/
/*! exports provided: UsuarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModel", function() { return UsuarioModel; });
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
    }
    UsuarioModel.prototype.clear = function () {
        this.idusuario = 0;
        this.nombres = '';
        this.apellidos = '';
        this.clave = '';
        this.cedula = '';
        this.direccion = '';
        this.referencia = '';
        this.ciudad = '';
        this.telefono = '';
        this.correo = '';
    };
    return UsuarioModel;
}());



/***/ }),

/***/ "./src/app/content/pages/components/e-commerce/_core/services/categoria.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/e-commerce/_core/services/categoria.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_http_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/http-utils.service */ "./src/app/content/pages/components/e-commerce/_core/utils/http-utils.service.ts");
/* harmony import */ var _models_query_models_query_params_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/query-models/query-params.model */ "./src/app/content/pages/components/e-commerce/_core/models/query-models/query-params.model.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global */ "./src/app/content/pages/components/e-commerce/_core/global.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriaService = /** @class */ (function () {
    function CategoriaService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
        this.lastFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_query_models_query_params_model__WEBPACK_IMPORTED_MODULE_4__["QueryParamsModel"]({}, 'asc', '', 0, 10));
    }
    CategoriaService.prototype.crudCategoria = function (categoria, opcion) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_5__["URL_GLOBAL"] + 'crudTipo', __assign({}, categoria, { opcion: opcion }), { headers: httpHeaders });
    };
    CategoriaService.prototype.findCategorias = function (queryParams) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_5__["URL_GLOBAL"] + 'findTipos', queryParams, { headers: httpHeaders });
    };
    CategoriaService.prototype.getCategorias = function () {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_5__["URL_GLOBAL"] + 'allcategorias', { headers: httpHeaders });
    };
    CategoriaService.prototype.getAllClasificaciones = function () {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_5__["URL_GLOBAL"] + 'getAllClasificaciones', { headers: httpHeaders });
    };
    CategoriaService.prototype.getAllMarcas = function () {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_5__["URL_GLOBAL"] + 'getAllMarcas', { headers: httpHeaders });
    };
    CategoriaService.prototype.getCategoriasByClasificaciones = function (idclasificacion) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_5__["URL_GLOBAL"] + 'getCategoriasByClasificaciones/' + idclasificacion, { headers: httpHeaders });
    };
    CategoriaService.prototype.getPresentacionesByMarcaAndCategoria = function (idmarca, idcategoria) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_5__["URL_GLOBAL"] + 'getPresentacionesByMarcaAndCategoria/' + idcategoria + '/' + idmarca, { headers: httpHeaders });
    };
    CategoriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utils_http_utils_service__WEBPACK_IMPORTED_MODULE_3__["HttpUtilsService"]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/content/pages/components/e-commerce/_core/services/importacion-producto.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/e-commerce/_core/services/importacion-producto.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: ImportacionProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportacionProductoService", function() { return ImportacionProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/http-utils.service */ "./src/app/content/pages/components/e-commerce/_core/utils/http-utils.service.ts");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto.service */ "./src/app/content/pages/components/e-commerce/_core/services/producto.service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./src/app/content/pages/components/e-commerce/_core/global.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API_IMPORTACION_PRODUCTOS_URL = 'api/importacionProductos';
// Fake REST API (Mock)  http://localhost:3002/api/
// This code emulates server calls
var ImportacionProductoService = /** @class */ (function () {
    function ImportacionProductoService(http, httpUtils, ProductoService) {
        this.http = http;
        this.httpUtils = httpUtils;
        this.ProductoService = ProductoService;
    }
    ImportacionProductoService.prototype.findProductosByIdImportacion = function (queryParams, idimportacion) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_4__["URL_GLOBAL"] + "findProductosByImportacion", __assign({}, queryParams, { idimportacion: idimportacion }));
    };
    //buscar producto de upcitemdb
    ImportacionProductoService.prototype.bucarProductoUpcItemDb = function (upc) {
        var body = {
            "upc": upc
        };
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_4__["URL_GLOBAL"] + 'buscarupc', body, { headers: httpHeaders });
    };
    ImportacionProductoService.prototype.crudImportacionProducto = function (importacionProducto, opcion) {
        // console.log(importacionProducto);
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_4__["URL_GLOBAL"] + 'crudImportacionProducto', __assign({}, importacionProducto, { opcion: opcion }));
    };
    ImportacionProductoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utils_http_utils_service__WEBPACK_IMPORTED_MODULE_2__["HttpUtilsService"],
            _producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"]])
    ], ImportacionProductoService);
    return ImportacionProductoService;
}());



/***/ }),

/***/ "./src/app/content/pages/components/e-commerce/_core/services/importacion.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/e-commerce/_core/services/importacion.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: ImportacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportacionService", function() { return ImportacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_http_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/http-utils.service */ "./src/app/content/pages/components/e-commerce/_core/utils/http-utils.service.ts");
/* harmony import */ var _models_query_models_query_params_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/query-models/query-params.model */ "./src/app/content/pages/components/e-commerce/_core/models/query-models/query-params.model.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global */ "./src/app/content/pages/components/e-commerce/_core/global.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var API_IMPORTACIONES_URL = 'api/importaciones';
var ImportacionService = /** @class */ (function () {
    function ImportacionService(http, httpUtils, _http) {
        this.http = http;
        this.httpUtils = httpUtils;
        this._http = _http;
        this.lastFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_query_models_query_params_model__WEBPACK_IMPORTED_MODULE_6__["QueryParamsModel"]({}, 'asc', '', 0, 10));
    }
    // CREATE =>  POST: add a new product to the server
    ImportacionService.prototype.createImportacion = function (importacion) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_IMPORTACIONES_URL, importacion, { headers: httpHeaders });
    };
    // READ
    ImportacionService.prototype.getAllImportaciones = function () {
        return this.http.get(API_IMPORTACIONES_URL);
    };
    // getImportacionById(importacionId: number): Observable<ImportacionModel> {
    // 	return this.http.get<ImportacionModel>(API_IMPORTACIONES_URL + `/${importacionId}`);
    // }
    ImportacionService.prototype.getImportacionById = function (importacionId) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_7__["URL_GLOBAL"] + ("findImportacionById/" + importacionId));
    };
    ImportacionService.prototype.crudImportacion = function (importacion, opcion) {
        // Note: Add headers if needed (tokens/bearer)
        // const httpHeaders = this.httpUtils.getHTTPHeaders();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': this.getToken() });
        return this._http.post(_global__WEBPACK_IMPORTED_MODULE_7__["URL_GLOBAL"] + 'crudImportacion', __assign({}, importacion, { opcion: opcion }), { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    ImportacionService.prototype.findImportaciones = function (queryParams) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_7__["URL_GLOBAL"] + 'findImportaciones', queryParams, { headers: httpHeaders });
    };
    // UPDATE => PUT: update the product on the server
    ImportacionService.prototype.updateImportacion = function (importacion) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_IMPORTACIONES_URL, importacion, { headers: httpHeaders });
    };
    // DELETE => delete the product from the server
    ImportacionService.prototype.deleteImportacion = function (importacionId) {
        var url = API_IMPORTACIONES_URL + "/" + importacionId;
        return this.http.delete(url);
    };
    ImportacionService.prototype.deleteImportaciones = function (ids) {
        if (ids === void 0) { ids = []; }
        var tasks$ = [];
        var length = ids.length;
        for (var i = 0; i < length; i++) {
            tasks$.push(this.deleteImportacion(ids[i]));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(tasks$);
    };
    ImportacionService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    ImportacionService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    ImportacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utils_http_utils_service__WEBPACK_IMPORTED_MODULE_5__["HttpUtilsService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ImportacionService);
    return ImportacionService;
}());



/***/ }),

/***/ "./src/app/content/pages/components/e-commerce/_core/services/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/e-commerce/_core/services/index.ts ***!
  \*****************************************************************************/
/*! exports provided: ImportacionService, ImportacionProductoService, ProductoService, MercadoLibreService, UsuarioService, CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _importacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importacion.service */ "./src/app/content/pages/components/e-commerce/_core/services/importacion.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportacionService", function() { return _importacion_service__WEBPACK_IMPORTED_MODULE_0__["ImportacionService"]; });

/* harmony import */ var _importacion_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importacion-producto.service */ "./src/app/content/pages/components/e-commerce/_core/services/importacion-producto.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportacionProductoService", function() { return _importacion_producto_service__WEBPACK_IMPORTED_MODULE_1__["ImportacionProductoService"]; });

/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto.service */ "./src/app/content/pages/components/e-commerce/_core/services/producto.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return _producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]; });

/* harmony import */ var _mercado_libre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mercado-libre.service */ "./src/app/content/pages/components/e-commerce/_core/services/mercado-libre.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MercadoLibreService", function() { return _mercado_libre_service__WEBPACK_IMPORTED_MODULE_3__["MercadoLibreService"]; });

/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario.service */ "./src/app/content/pages/components/e-commerce/_core/services/usuario.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]; });

/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria.service */ "./src/app/content/pages/components/e-commerce/_core/services/categoria.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return _categoria_service__WEBPACK_IMPORTED_MODULE_5__["CategoriaService"]; });









/***/ })

}]);
//# sourceMappingURL=components-e-commerce-e-commerce-module~envio-datos-cliente-envio-datos-cliente-module.js.map