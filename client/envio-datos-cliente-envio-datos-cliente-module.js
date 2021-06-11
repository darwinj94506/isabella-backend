(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["envio-datos-cliente-envio-datos-cliente-module"],{

/***/ "./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-portlet [options]=\"{headLarge: true, enableSticky: true}\" [loading$]=\"loading$\">\n    <!-- <ng-container mPortletHead>\n        <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <span class=\"m-portlet__head-icon m--hide\">\n                                <i class=\"la la-gear\"></i>\n                            </span>\n                <h3 class=\"m-portlet__head-text\">Datos personales para el envío</h3>\n            </div>\n        </div>\n        </div>\n\n    </ng-container> -->\n    <ng-container mPortletHeadTitle>\n        <div class=\"m-portlet__head-title\">\n            <h3 class=\"m-portlet__head-text\">\n                Datos personales para el envío\n            </h3>\n        </div>\n    </ng-container>\n\n\n    <ng-container mPortletBody>\n        <form class=\"m-form\" [formGroup]=\"usuarioForm\">\n            <!-- <div class=\"m-portlet__body\"> -->\n\n            <div class=\"m-portlet__body-progress\">\n                <mat-spinner [diameter]=\"20\"></mat-spinner>\n            </div>\n\n            <!-- <m-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\" (close)=\"onAlertClose($event)\">\n                    Por favor cambie los campos incorrectos para enviar la solicitud\n                </m-alert> -->\n\n            <div class=\"form-group m-form__group row\">\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Ingrese los nombres\" formControlName=\"nombres\" />\n                        <mat-hint align=\"start\">Por favor ingrese los\n                            <strong>nombres </strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.nombres.errors?.required\">\n                            <strong>Los nombres son requeridos</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.nombres.errors?.maxlength\">\n                            <strong><br>Máximo 255 caracteres</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.nombres.errors?.minlength\">\n                            <strong>Mínimo 3 caracteres</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Ingrese los apellidos\" formControlName=\"apellidos\" />\n                        <mat-hint align=\"start\">Por favor ingrese los\n                            <strong>apellidos</strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.apellidos.errors?.required\">\n                            <strong>Los apellidos son requeridos</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.apellidos.errors?.maxlength\">\n                            <strong><br>Máximo 255 caracteres</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.apellidos.errors?.minlength\">\n                            <strong>Mínimo 3 caracteres</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!-- <div class=\"m-separator m-separator--dashed\"></div> -->\n\n            <div class=\"form-group m-form__group row\">\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Ingrese la cédula\" formControlName=\"cedula\" />\n                        <mat-hint align=\"start\">Por favor ingrese la\n                            <strong>cédula</strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.cedula.errors?.required\">\n                            <strong>La cédula es requerida</strong>g>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.cedula.errors?.pattern\">\n                            <strong>Solo se permiten números</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.cedula.errors?.maxlength\">\n                            <strong>Máximo 10 caracteres</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.cedula.errors?.minlength\">\n                            <strong>Debe tener 10 caracteres</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Ingrese la dirección\" formControlName=\"direccion\" />\n                        <mat-hint align=\"start\">Por favor ingrese la\n                            <strong>dirección</strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.direccion.errors?.required\">\n                            <strong>La dirección es requerida</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.direccion.errors?.maxlength\">\n                            <strong>Máximo 255 caracteres</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <!-- <div class=\"m-separator m-separator--dashed\"></div> -->\n            <div class=\"form-group m-form__group row\">\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Ingrese la referecia\" formControlName=\"referencia\" />\n                        <mat-hint align=\"start\">Por favor ingrese la\n                            <strong>referencia</strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.referencia.errors?.required\">\n                            <strong>La referecia es requerida</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.referencia.errors?.maxlength\">\n                            <strong>Máximo 255 caracteres</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Ingrese la ciudad\" formControlName=\"ciudad\" />\n                        <mat-hint align=\"start\">Por favor ingrese la\n                            <strong>ciudad</strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.ciudad.errors?.required\">\n                            <strong>La ciudad es requerida</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.ciudad.errors?.maxlength\">\n                            <strong>Máximo 255 caracteres</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <!-- <div class=\"m-separator m-separator--dashed\"></div> -->\n            <div class=\"form-group m-form__group row\">\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Ingrese el teléfono\" formControlName=\"telefono\" />\n                        <mat-hint align=\"start\">Por favor ingrese el\n                            <strong>teléfono</strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.telefono.errors?.required\">\n                            <strong>El teléfono es requerido</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.telefono.errors?.pattern\">\n                            <strong>Solo se permiten números</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.telefono.errors?.maxlength\">\n                            <strong>Máximo 10 caracteres</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.telefono.errors?.minlength\">\n                            <strong>Mínimo 7 caracteres</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-lg-6 m--margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Ingrese el email\" formControlName=\"correo\" />\n                        <mat-hint align=\"start\">Por favor ingrese el\n                            <strong>email</strong>\n                        </mat-hint>\n                        <mat-error *ngIf=\"f.correo.errors?.required\">\n                            <strong>El correo es requerido</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.correo.errors?.maxlength\">\n                            <strong>Máximo 50 caracteres</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"f.correo.errors?.email\">\n                            <strong>Formato de correo inválido</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!-- </div> -->\n            <div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\n                <div class=\"m-form__actions m-form__actions--solid\">\n                    <div class=\"row text-right\">\n                        <div class=\"col-lg-12\">\n                            <button type=\"button\" mat-raised-button cdkFocusInitial matTooltip=\"Cancelar envío\">\n                                Cancelar\n                            </button>&nbsp;\n                            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Enviar Datos\">\n                                Guardar\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </ng-container>\n</m-portlet>"

/***/ }),

/***/ "./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DatosClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosClienteComponent", function() { return DatosClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_e_commerce_core_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/e-commerce/_core/services/index */ "./src/app/content/pages/components/e-commerce/_core/services/index.ts");
/* harmony import */ var _components_e_commerce_core_models_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/e-commerce/_core/models/usuario.model */ "./src/app/content/pages/components/e-commerce/_core/models/usuario.model.ts");
/* harmony import */ var _components_e_commerce_core_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/e-commerce/_core/utils/layout-utils.service */ "./src/app/content/pages/components/e-commerce/_core/utils/layout-utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { TypesUtilsService } from '../components/e-commerce/_core/utils/types-utils.service';




var DatosClienteComponent = /** @class */ (function () {
    function DatosClienteComponent(fb, layoutUtilsService, usuarioService) {
        this.fb = fb;
        this.layoutUtilsService = layoutUtilsService;
        this.usuarioService = usuarioService;
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
    }
    DatosClienteComponent.prototype.ngOnInit = function () {
        this.loadingSubject.next(true);
        this.usuario = new _components_e_commerce_core_models_usuario_model__WEBPACK_IMPORTED_MODULE_4__["UsuarioModel"]();
        this.usuario.clear();
        console.log(this.usuario);
        this.createForm();
        //   this.viewLoading = true;
        //   	setTimeout(() => {
        // 	this.viewLoading = false;
        // }, 1000);
    };
    Object.defineProperty(DatosClienteComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.usuarioForm.controls; },
        enumerable: true,
        configurable: true
    });
    DatosClienteComponent.prototype.createForm = function () {
        this.loadingSubject.next(false);
        this.usuarioForm = this.fb.group({
            nombres: [this.usuario.nombres, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            apellidos: [this.usuario.apellidos, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            cedula: [this.usuario.cedula, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])],
            // clave: [this.usuario.clave, Validators.compose([Validators.required,Validators.maxLength(50)])],
            // rol: [this.usuario.rol, Validators.required],
            direccion: [this.usuario.direccion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            referencia: [this.usuario.referencia, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            ciudad: [this.usuario.ciudad, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            telefono: [this.usuario.telefono, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")])],
            correo: [this.usuario.correo, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]]
        });
    };
    DatosClienteComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.usuarioForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    DatosClienteComponent.prototype.prepareCustomer = function () {
        var controls = this.usuarioForm.controls;
        var _usuario = new _components_e_commerce_core_models_usuario_model__WEBPACK_IMPORTED_MODULE_4__["UsuarioModel"]();
        _usuario.idusuario = 0;
        _usuario.nombres = controls['nombres'].value;
        _usuario.apellidos = controls['apellidos'].value;
        _usuario.cedula = controls['cedula'].value;
        _usuario.clave = ''; //no tiene clave 
        _usuario.rol = 3; //rol 3 cliente no tiene acceso al sistema
        _usuario.direccion = controls['direccion'].value;
        _usuario.referencia = controls['referencia'].value;
        _usuario.ciudad = controls['ciudad'].value;
        _usuario.telefono = controls['telefono'].value;
        _usuario.correo = controls['correo'].value;
        return _usuario;
    };
    DatosClienteComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        this.loadingSubject.next(true);
        var controls = this.usuarioForm.controls;
        /** check form */
        if (this.usuarioForm.invalid) {
            this.loadingSubject.next(false);
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedProducto = this.prepareCustomer();
        this.createCustomer(editedProducto);
    };
    DatosClienteComponent.prototype.createCustomer = function (usuario) {
        var _this = this;
        this.usuarioService.crudDatoscliente(usuario).subscribe(function (res) {
            // console.log(res);
            _this.loadingSubject.next(false);
            if (res._info_id) {
                usuario.idusuario = res._idusuario;
                // alert(res._info_desc);
                var message = res._info_desc;
                _this.layoutUtilsService.showActionNotification(message, _components_e_commerce_core_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Create, 10000, true, false);
                // this.viewLoading = false;
                // this.dialogRef.close(
                //   usuario
                //   // isEdit: false
                // );
            }
            else {
                // this.viewLoading = false;
                alert(res._info_desc);
            }
        }, function (error) {
            _this.loadingSubject.next(false);
            alert("Ha ocurrido un error en la solicitud:" + error);
            // console.log(error);
        });
    };
    DatosClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-datos-cliente',
            template: __webpack_require__(/*! ./datos-cliente.component.html */ "./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.html"),
            styles: [__webpack_require__(/*! ./datos-cliente.component.scss */ "./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _components_e_commerce_core_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _components_e_commerce_core_services_index__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], DatosClienteComponent);
    return DatosClienteComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/envio-datos-cliente/envio-datos-cliente.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/envio-datos-cliente/envio-datos-cliente.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EnvioDatosClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvioDatosClienteModule", function() { return EnvioDatosClienteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datos_cliente_datos_cliente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datos-cliente/datos-cliente.component */ "./src/app/content/pages/envio-datos-cliente/datos-cliente/datos-cliente.component.ts");
/* harmony import */ var _components_e_commerce_core_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/e-commerce/_core/services/usuario.service */ "./src/app/content/pages/components/e-commerce/_core/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _components_e_commerce_core_utils_http_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/e-commerce/_core/utils/http-utils.service */ "./src/app/content/pages/components/e-commerce/_core/utils/http-utils.service.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layout/layout.module */ "./src/app/content/layout/layout.module.ts");
/* harmony import */ var _components_e_commerce_core_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/e-commerce/_core/utils/layout-utils.service */ "./src/app/content/pages/components/e-commerce/_core/utils/layout-utils.service.ts");
/* harmony import */ var _components_e_commerce_shared_shared_alert_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/e-commerce/_shared/shared-alert.module */ "./src/app/content/pages/components/e-commerce/_shared/shared-alert.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Material

var EnvioDatosClienteModule = /** @class */ (function () {
    function EnvioDatosClienteModule() {
    }
    EnvioDatosClienteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_7__["PartialsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                // MAT_DIALOG_DEFAULT_OPTIONS,
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _components_e_commerce_shared_shared_alert_module__WEBPACK_IMPORTED_MODULE_11__["SharedAlertModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _datos_cliente_datos_cliente_component__WEBPACK_IMPORTED_MODULE_2__["DatosClienteComponent"]
                    }
                ])
            ],
            declarations: [_datos_cliente_datos_cliente_component__WEBPACK_IMPORTED_MODULE_2__["DatosClienteComponent"]],
            providers: [_components_e_commerce_core_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _components_e_commerce_core_utils_http_utils_service__WEBPACK_IMPORTED_MODULE_8__["HttpUtilsService"], _components_e_commerce_core_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_10__["LayoutUtilsService"]]
        })
    ], EnvioDatosClienteModule);
    return EnvioDatosClienteModule;
}());



/***/ })

}]);
//# sourceMappingURL=envio-datos-cliente-envio-datos-cliente-module.js.map