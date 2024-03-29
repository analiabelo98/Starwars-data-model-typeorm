"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.Favs = void 0;
var typeorm_1 = require("typeorm");
var Planets_1 = require("./Planets");
var Characters_1 = require("./Characters");
var Vehicles_1 = require("./Vehicles");
var User_1 = require("./User");
var Favs = /** @class */ (function (_super) {
    __extends(Favs, _super);
    function Favs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Favs.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.favs; }),
        __metadata("design:type", User_1.User)
    ], Favs.prototype, "user");
    __decorate([
        typeorm_1.ManyToMany(function () { return Planets_1.Planets; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Favs.prototype, "planets");
    __decorate([
        typeorm_1.ManyToMany(function () { return Characters_1.Characters; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Favs.prototype, "characters");
    __decorate([
        typeorm_1.ManyToMany(function () { return Vehicles_1.Vehicles; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Favs.prototype, "vehicles");
    Favs = __decorate([
        typeorm_1.Entity()
    ], Favs);
    return Favs;
}(typeorm_1.BaseEntity));
exports.Favs = Favs;
