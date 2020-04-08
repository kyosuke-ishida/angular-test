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
// 一覧に表示するカードコンポーネント
var core_1 = require("@angular/core");
var card_service_1 = require("../../services/card.service");
var CardComponent = (function () {
    // CardServiceをインスタンス化
    function CardComponent(cardservice) {
        this.cardservice = cardservice;
    }
    // コンポーネント初期化時にCardService経由で投稿情報を取得
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardservice.requestGet()
            .subscribe(function (data) {
            _this.cards = data;
        }, function (error) {
            _this.cards = [];
        });
    };
    return CardComponent;
}());
CardComponent = __decorate([
    core_1.Component({
        selector: 'card',
        providers: [card_service_1.CardService],
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.scss']
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map