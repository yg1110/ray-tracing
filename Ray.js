"use strict";
exports.__esModule = true;
var Vector_1 = require("./Vector");
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
        this.getRayColor = function () {
            var unit_direction = _this.getDirection().unit_vector();
            var t = 0.5 * (unit_direction.getY() + 1.0);
            var color = new Vector_1["default"](1.0, 1.0, 1.0);
            return color.mul(1.0 - t).add(BLUESKY.mul(t));
        };
        this.origin = origin;
        this.direction = direction;
    }
    return Ray;
}());
exports["default"] = Ray;
