"use strict";
exports.__esModule = true;
exports.getRayColor = void 0;
var Vector_1 = require("./Vector");
var HitRecord_1 = require("./HitRecord");
var utility_1 = require("./utility");
var SUNSET = new Vector_1["default"](247.0 / 255.9, 147.0 / 255.9, 27.0 / 255.9);
var BLUESKY = new Vector_1["default"](0.5, 0.7, 1.0);
var Ray = /** @class */ (function () {
    function Ray(origin, direction) {
        var _this = this;
        this.origin = new Vector_1["default"](0.0, 0.0, 0.0);
        this.direction = new Vector_1["default"](0.0, 0.0, 0.0);
        this.getOrigin = function () {
            return _this.origin;
        };
        this.getDirection = function () {
            return _this.direction;
        };
        this.at = function (t) {
            return _this.direction.mul(t).add(_this.origin);
        };
        this.origin = origin;
        this.direction = direction;
    }
    return Ray;
}());
// const r = new Ray(origin, direction);
// let t = hit_sphere(r, sphere, 1.0);
// if(t >= 0) {
//     const P = r.at(t);
//     const V = unit_vector(P).sub(sphere);
//     rayColor = new Vec3(
//         (V.getX() + 1.0)  * 0.5,
//         (V.getY() + 1.0)  * 0.5,
//         (V.getZ() + 1.0)  * 0.5
//     );
// } else {
//     rayColor = r.getRayColor();
// }
var getRayColor = function (r, world) {
    var rec = new HitRecord_1["default"]();
    var isHit = world.hit(r, 0.0, utility_1.INFINITY, rec);
    if (isHit) {
        // const P = r.at(t);
        // const V = unit_vector(P).sub(sphere);
        var V = rec.normal;
        return new Vector_1["default"]((V.getX() + 1.0) * 0.5, (V.getY() + 1.0) * 0.5, (V.getZ() + 1.0) * 0.5);
    }
    else {
        var unit_direction = (0, Vector_1.unit_vector)(r.getDirection());
        var t = 0.5 * (unit_direction.getY() + 1.0);
        var color = new Vector_1["default"](1.0, 1.0, 1.0);
        return color.mul(1.0 - t).add(BLUESKY.mul(t));
    }
};
exports.getRayColor = getRayColor;
exports["default"] = Ray;
