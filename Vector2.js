var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.x = 0.0;
        this.y = 0.0;
        this.z = 0.0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.prototype.valueOf = function () {
        return Vector3._vectors.push(this);
    };
    Vector3.prototype.toString = function () {
        return JSON.stringify({ x: this.x, y: this.y });
    };
    return Vector3;
}());
var main = function () {
    var vector = new Vector3(1, 2, 3);
    console.log(vector.valueOf());
    console.log(vector.toString());
};
main();
// export default Vec3;
