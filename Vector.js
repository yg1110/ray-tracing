"use strict";
exports.__esModule = true;
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
        this.length_squared = function () {
            return _this.x * _this.x + _this.y * _this.y + _this.z * _this.z;
        };
        this.length = function () {
            return Math.sqrt(_this.length_squared());
        };
        this.unit_vector = function () {
            return _this.div(_this.length());
        };
        this.neg = function (v) {
            return new Vec3(-v.getX(), -v.getY(), -v.getZ());
        };
        this.dot = function (u, v) {
            return u.getX() * v.getX() + u.getY() * v.getY() + u.getZ() * v.getZ();
        };
        this.cross = function (u, v) {
            return new Vec3(u.getY() * v.getZ() - u.getZ() * v.getY(), u.getZ() * v.getX() - u.getX() * v.getZ(), u.getX() * v.getY() - u.getY() * v.getX());
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Vec3;
}());
exports["default"] = Vec3;
