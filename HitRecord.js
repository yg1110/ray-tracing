"use strict";
exports.__esModule = true;
// 광선이 교차하면, 교차된 지점의 정보를 보관하는 객체
var Vector_1 = require("./Vector");
var HitRecord = /** @class */ (function () {
    function HitRecord() {
        this.point = new Vector_1["default"](0.0, 0.0, 0.0); //교차점 위치
        this.normal = new Vector_1["default"](0.0, 0.0, 0.0); //교차점의 노말벡터
        this.t = 0.0; //교차점 까지 거리, 혹은 시간
        this.front_face = false; //안쪽면이 보이게 할건지, 바깥면이 보이게 할건지 결정함
    }
    HitRecord.prototype.set_face_normal = function (r, outward_normal) {
        this.front_face = (0, Vector_1.dot)(r.getDirection(), outward_normal) < 0.0;
        if (this.front_face) {
            this.normal = outward_normal;
        }
        else {
            this.normal = (0, Vector_1.neg)(outward_normal);
        }
    };
    return HitRecord;
}());
exports["default"] = HitRecord;
