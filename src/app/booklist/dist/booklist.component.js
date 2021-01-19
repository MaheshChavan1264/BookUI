"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooklistComponent = void 0;
var core_1 = require("@angular/core");
var BooklistComponent = /** @class */ (function () {
    // tslint:disable-next-line: variable-name
    function BooklistComponent(_route, _service) {
        this._route = _route;
        this._service = _service;
    }
    BooklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.fetchBookListFromRemote().subscribe(function (data) {
            console.log('response received');
            _this._booklist = data;
        }, function (error) { return console.log('exception occured'); });
    };
    BooklistComponent.prototype.goToAddBook = function () {
        this._route.navigate(['/addbook']);
    };
    BooklistComponent.prototype.goToEditBook = function (id) {
        console.log('id: ' + id);
        this._route.navigate(['/editbook', id]);
    };
    BooklistComponent.prototype.goToViewBook = function (id) {
        console.log('id: ' + id);
        this._route.navigate(["/viewbook", id]);
    };
    BooklistComponent = __decorate([
        core_1.Component({
            selector: 'app-booklist',
            templateUrl: './booklist.component.html',
            styleUrls: ['./booklist.component.css']
        })
    ], BooklistComponent);
    return BooklistComponent;
}());
exports.BooklistComponent = BooklistComponent;
