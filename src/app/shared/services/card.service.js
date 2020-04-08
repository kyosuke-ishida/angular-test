"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var CardService = (function () {
    // Httpサービスをインスタンス化
    function CardService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new http_1.Headers({
                'key': 'X-API-KEY',
                'Value': 'b279aadc-834e-4977-80e2-e7ba2c825bb7'
            })
        };
    }
    CardService.prototype.requestGet = function () {
        // let headers = new Headers();
        var params = new http_1.URLSearchParams();
        // params.set('callback', 'JSON_CALLBACK');
        return this.http.get('https://ispec-test.microcms.io/api/v1/photo')
            .map(function (response) {
            return response.json() || {};
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error.statusText);
        });
    };
    return CardService;
}());
CardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map