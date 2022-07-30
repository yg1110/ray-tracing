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
exports.__esModule = true;
var Vector_1 = require("./Vector");
var Hittable_1 = require("./Hittable");
// 광선이 교차하면, 교차된 지점의 정보를 보관하는 객체
// 광선이 교차할 수 있는 구 입니다. Hittable을 상속받아 구현하는 컨크리트 클래스 입니다.
var Sphere = /** @class */ (function (_super) {
    __extends(Sphere, _super);
    function Sphere(vector) {
        var _this = _super.call(this) || this;
        _this.Point = new Vector_1["default"](0.0, 0.0, 0.0);
        _this.Point = vector;
        return _this;
    }
    Sphere.prototype.hit = function (r, t_min, t_max, rec) {
        var DO = (0, Vector_1.dot)(r.getDirection(), r.getOrigin());
        var PD = (0, Vector_1.dot)(rec.normal, r.getDirection());
        var DD = (0, Vector_1.dot)(r.getDirection(), r.getDirection());
        var OP = (0, Vector_1.dot)(r.getOrigin(), rec.normal);
        var OO = (0, Vector_1.dot)(r.getOrigin(), r.getOrigin());
        var PP = (0, Vector_1.dot)(rec.normal, rec.normal);
        var a = DD;
        var b = 2 * DO - 2 * PD;
        var c = -2 * OP + OO + PP - rec.t * rec.t;
        var t = (b * b - 4.0 * a * c);
        return t_min < t && t < t_max ? true : false;
    };
    return Sphere;
}(Hittable_1["default"]));
exports["default"] = Sphere;
