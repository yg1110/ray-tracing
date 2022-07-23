"use strict";
exports.__esModule = true;
exports.cross = exports.dot = exports.neg = exports.unit_vector = exports.length = exports.length_squared = void 0;
var Vec3 = /** @class */ (function () {
    function Vec3(x, y, z) {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.getVector = function () {
            return [_this.x, _this.y, _this.z];
        };
        this.getX = function () {
            return _this.x;
        };
        this.setX = function (x) {
            _this.x = x;
        };
        this.getY = function () {
            return _this.y;
        };
        this.setY = function (y) {
            _this.y = y;
        };
        this.getZ = function () {
            return _this.z;
        };
        this.setZ = function (z) {
            _this.z = z;
        };
        this.getIndex = function (index) {
            if (_this.getVector().length <= index)
                return null;
            else
                return _this.getVector()[index];
        };
        this.add = function (rhs) {
            if (typeof rhs === 'number') {
                return new Vec3(_this.getX() + rhs, _this.getY() + rhs, _this.getZ() + rhs);
            }
            else {
                return new Vec3(_this.getX() + rhs.getX(), _this.getY() + rhs.getY(), _this.getZ() + rhs.getZ());
            }
        };
        this.sub = function (rhs) {
            if (typeof rhs === 'number') {
                return new Vec3(_this.getX() - rhs, _this.getY() - rhs, _this.getZ() - rhs);
            }
            else {
                return new Vec3(_this.getX() - rhs.getX(), _this.getY() - rhs.getY(), _this.getZ() - rhs.getZ());
            }
        };
        this.mul = function (rhs) {
            if (typeof rhs === 'number') {
                return new Vec3(_this.getX() * rhs, _this.getY() * rhs, _this.getZ() * rhs);
            }
            else {
                return new Vec3(_this.getX() * rhs.getX(), _this.getY() * rhs.getY(), _this.getZ() * rhs.getZ());
            }
        };
        this.div = function (rhs) {
            if (typeof rhs === 'number') {
                return new Vec3(_this.getX() / rhs, _this.getY() / rhs, _this.getZ() / rhs);
            }
            else {
                return new Vec3(_this.getX() / rhs.getX(), _this.getY() / rhs.getY(), _this.getZ() / rhs.getZ());
            }
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Vec3;
}());
var length_squared = function (v) {
    return v.getX() * v.getX() + v.getY() * v.getY() + v.getZ() * v.getZ();
};
exports.length_squared = length_squared;
var length = function (v) {
    return Math.sqrt((0, exports.length_squared)(v));
};
exports.length = length;
var unit_vector = function (v) {
    return v.div((0, exports.length)(v));
};
exports.unit_vector = unit_vector;
var neg = function (v) {
    return new Vec3(-v.getX(), -v.getY(), -v.getZ());
};
exports.neg = neg;
var dot = function (u, v) {
    return u.getX() * v.getX() + u.getY() * v.getY() + u.getZ() * v.getZ();
};
exports.dot = dot;
var cross = function (u, v) {
    return new Vec3(u.getY() * v.getZ() - u.getZ() * v.getY(), u.getZ() * v.getX() - u.getX() * v.getZ(), u.getX() * v.getY() - u.getY() * v.getX());
};
exports.cross = cross;
exports["default"] = Vec3;
