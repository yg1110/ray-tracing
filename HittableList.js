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
var Hittable_1 = require("./Hittable");
// 광선이 교차할 수 있는 세계 입니다. Hittable을 상속받아 구현하는 컨크리트 클래스 입니다.
var HitableList = /** @class */ (function (_super) {
    __extends(HitableList, _super);
    function HitableList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hitableList = [];
        return _this;
    }
    HitableList.prototype.clear = function () {
        this.hitableList = [];
    };
    HitableList.prototype.add = function (hitable) {
        this.hitableList.push(hitable);
    };
    HitableList.prototype.getHitableList = function () {
        return this.hitableList;
    };
    HitableList.prototype.hit = function (r, t_min, t_max, rec) {
        var hitableList = this.hitableList;
        // for(let i=0; i<hitableList.length; i++) {
        //     return hitableList[i].hit(r, t_min, t_max, rec);
        // }
        return hitableList[0].hit(r, t_min, t_max, rec);
        // let outward_normal = (rec.point.sub(rec.t)).div(rec.t);
        // rec.set_face_normal(r, outward_normal);
        // return true;
    };
    return HitableList;
}(Hittable_1["default"]));
exports["default"] = HitableList;
