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
        this.length_squared = function () {
            return (_this.x * _this.x) + (_this.y * _this.y) + (_this.z * _this.z);
        };
        this.length = function () {
            return Math.sqrt(_this.length_squared());
        };
        this.normalize = function () {
            _this.setX(_this.getX() / _this.length());
            _this.setY(_this.getY() / _this.length());
            _this.setZ(_this.getZ() / _this.length());
            return _this;
        };
        this.Mul = function (rhs) {
            if (typeof rhs === 'number') {
                _this.setX(_this.getX() * rhs);
                _this.setY(_this.getY() * rhs);
                _this.setZ(_this.getZ() * rhs);
            }
            else if (typeof rhs === 'object') {
                _this.setX(_this.getX() * rhs.getX());
                _this.setY(_this.getY() * rhs.getY());
                _this.setZ(_this.getZ() * rhs.getZ());
            }
            else { }
            return _this;
        };
        this.Div = function (rhs) {
            if (typeof rhs === 'number') {
                _this.setX(_this.getX() * 1.0 / rhs);
                _this.setY(_this.getY() * 1.0 / rhs);
                _this.setZ(_this.getZ() * 1.0 / rhs);
            }
            else if (typeof rhs === 'object') {
                _this.setX(_this.getX() * 1.0 / rhs.getX());
                _this.setY(_this.getY() * 1.0 / rhs.getY());
                _this.setZ(_this.getZ() * 1.0 / rhs.getZ());
            }
            else { }
            return _this;
        };
        this.Add = function (rhs) {
            if (typeof rhs === 'number') {
                _this.setX(_this.getX() + rhs);
                _this.setY(_this.getY() + rhs);
                _this.setZ(_this.getZ() + rhs);
            }
            else if (typeof rhs === 'object') {
                _this.setX(_this.getX() + rhs.getX());
                _this.setY(_this.getY() + rhs.getY());
                _this.setZ(_this.getZ() + rhs.getZ());
            }
            else { }
            return _this;
        };
        this.Index = function (index) {
            if (_this.getVector().length <= index)
                return null;
            else
                return _this.getVector()[index];
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Vec3;
}());
var neg = function (v) {
    v.setX(-v.getX());
    v.setY(-v.getY());
    v.setZ(-v.getZ());
    return v;
};
var dot = function (u, v) {
    return u.getX() * v.getX() + u.getY() * v.getY() + u.getZ() * v.getZ();
};
var cross = function (u, v) {
    return new Vec3(u.getY() * v.getZ() - u.getZ() * v.getY(), u.getZ() * v.getX() - u.getX() * v.getZ(), u.getX() * v.getY() - u.getY() * v.getX());
};
var main = function () {
    var vector1 = new Vec3(2.0, 2.0, 2.0);
    var vector2 = new Vec3(3.0, 2.0, 1.0);
    var unitVector = vector1.normalize();
    // const multiple = vector1.Mul(3);
    // const division = vector1.Div(3);
    // const addition = vector1.Add(3);
    // const dotVector = dot(vector1, vector2)
    // const negative = neg(vector1);
    // const dotCross = cross(vector1, vector2)
    // console.log(negative.getVector())
    // console.log(multiple.getVector())
    // console.log(division.getVector())
    // console.log(addition.getVector())
    // console.log(vector1.Index(2))
    // console.log(dotVector)
    // console.log(dotCross.getVector())
    console.log(unitVector.getVector());
};
main();
