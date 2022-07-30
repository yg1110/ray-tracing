"use strict";
exports.__esModule = true;
exports.degree_to_radians = exports.PI = exports.INFINITY = void 0;
//각도를 입력받아 라디안으로 변환하는 함수
exports.INFINITY = Number.MAX_SAFE_INTEGER;
exports.PI = 3.1415926535897932385;
var degree_to_radians = function (degree) {
    return degree * exports.PI / 180.0;
};
exports.degree_to_radians = degree_to_radians;
