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
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Vec3;
}());
var Neg = function (v) {
    v.setX(-v.getX());
    v.setY(-v.getY());
    v.setZ(-v.getZ());
    return v;
};
var Mul = function (v, rhs) {
    if (typeof rhs === 'number') {
        v.setX(v.getX() * rhs);
        v.setY(v.getY() * rhs);
        v.setZ(v.getZ() * rhs);
    }
    else if (typeof rhs === 'object') {
        v.setX(v.getX() * rhs.getX());
        v.setY(v.getY() * rhs.getY());
        v.setZ(v.getZ() * rhs.getZ());
    }
    else { }
    return v;
};
var Div = function (v, rhs) {
    if (typeof rhs === 'number') {
        v.setX(v.getX() * 1.0 / rhs);
        v.setY(v.getY() * 1.0 / rhs);
        v.setZ(v.getZ() * 1.0 / rhs);
    }
    else if (typeof rhs === 'object') {
        v.setX(v.getX() * 1.0 / rhs.getX());
        v.setY(v.getY() * 1.0 / rhs.getY());
        v.setZ(v.getZ() * 1.0 / rhs.getZ());
    }
    else { }
    return v;
};
var Add = function (v, rhs) {
    if (typeof rhs === 'number') {
        v.setX(v.getX() + rhs);
        v.setY(v.getY() + rhs);
        v.setZ(v.getZ() + rhs);
    }
    else if (typeof rhs === 'object') {
        v.setX(v.getX() + rhs.getX());
        v.setY(v.getY() + rhs.getY());
        v.setZ(v.getZ() + rhs.getZ());
    }
    else { }
    return v;
};
var Index = function (v, index) {
    if (v.getVector().length <= index)
        return null;
    else
        return v.getVector()[index];
};
var dot = function (u, v) {
    return u.getX() * v.getX() + u.getY() * v.getY() + u.getZ() * v.getZ();
};
var cross = function (u, v) {
    return new Vec3(u.getY() * v.getZ() - u.getZ() * v.getY(), u.getZ() * v.getX() - u.getX() * v.getZ(), u.getX() * v.getY() - u.getY() * v.getX());
};
// const unit_vector = (v:Vec3) => {
//     return v
// }
var main = function () {
    var vector1 = new Vec3(1.0, 2.0, 3.0);
    var vector2 = new Vec3(3.0, 2.0, 1.0);
    // const negative = Neg(vector1);
    // const multiple = Mul(vector1, 3);
    // const division = Div(vector1, 3);
    // const addition = Add(vector1, 3);
    var dotVector = dot(vector1, vector2);
    // const dotCross = cross(vector1, vector2)
    // console.log(negative.getVector())
    // console.log(multiple.getVector())
    // console.log(division.getVector())
    // console.log(addition.getVector())
    // console.log(Index(addition, 4))
    console.log(dotVector);
    // console.log(dotCross.getVector())
};
main();
