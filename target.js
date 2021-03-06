"use strict";
exports.__esModule = true;
var fs = require("fs");
var Vector_1 = require("./Vector");
var Ray_1 = require("./Ray");
var width = 400;
var ratio = 16.0 / 9.0;
;
var height = (width / ratio);
var hit_sphere = function (r, sphere, radius) {
    // p : sphere
    // o : r.getOrigin
    // d : r.getDirection
    var DO = (0, Vector_1.dot)(r.getDirection(), r.getOrigin());
    var PD = (0, Vector_1.dot)(sphere, r.getDirection());
    var DD = (0, Vector_1.dot)(r.getDirection(), r.getDirection());
    var OP = (0, Vector_1.dot)(r.getOrigin(), sphere);
    var OO = (0, Vector_1.dot)(r.getOrigin(), r.getOrigin());
    var PP = (0, Vector_1.dot)(sphere, sphere);
    var a = DD;
    var b = 2 * DO - 2 * PD;
    var c = -2 * OP + OO + PP - radius * radius;
    return b * b - 4.0 * a * c;
};
// 랜더링 해주는 함수
var present = function (width, ratio) {
    var output = [];
    var aspect_ratio = ratio;
    var image_width = width;
    var image_height = image_width / aspect_ratio;
    var viewportHeight = 2.0;
    var viportWidth = aspect_ratio * viewportHeight;
    var focalLength = 1.0;
    var origin = new Vector_1["default"](0.0, 0.0, 0.0);
    var horizontal = new Vector_1["default"](viportWidth, 0.0, 0.0);
    var vertical = new Vector_1["default"](0.0, viewportHeight, 0.0);
    var focal = new Vector_1["default"](0.0, 0.0, focalLength);
    var lowerLeftConer = origin.sub(horizontal.div(2.0)).sub(vertical.div(2.0)).sub(focal);
    for (var j = 0; j < image_height; j++) {
        for (var i = 0; i < image_width; i++) {
            var u = i / (image_width - 1);
            var v = j / (image_height - 1);
            var direction = lowerLeftConer.add(horizontal.mul(u)).add(vertical.mul(v)).sub(origin);
            var rayColor = new Vector_1["default"](0.0, 0.0, 0.0);
            var sphere = new Vector_1["default"](0.0, 0.0, -2.0);
            var r = new Ray_1["default"](origin, direction);
            var t = hit_sphere(r, sphere, 1.0);
            if (t >= 0) {
                var P = r.at(t);
                var V = (0, Vector_1.unit_vector)(P).sub(sphere);
                rayColor = new Vector_1["default"]((V.getX() + 1.0) * 0.5, (V.getY() + 1.0) * 0.5, (V.getZ() + 1.0) * 0.5);
            }
            else {
                rayColor = r.getRayColor();
            }
            output.push(Math.floor(rayColor.getX() * 255.999));
            output.push(Math.floor(rayColor.getY() * 255.999));
            output.push(Math.floor(rayColor.getZ() * 255.999));
        }
    }
    return output;
};
var ppm_header = function (width, height) {
    return "P3\n".concat(width, " ").concat(height, "\n255\n");
};
var writeRGB = function (output) {
    var rgb = '';
    var filename = 'output.ppm';
    var header = ppm_header(width, height);
    fs.writeFileSync(filename, header, 'utf-8');
    for (var i = 1; i <= output.length; i++) {
        if (i % 3 === 0) {
            if (i === output.length) {
                rgb += output[i - 1];
            }
            else {
                rgb += output[i - 1] + '\n';
            }
            fs.appendFileSync(filename, rgb, 'utf-8');
            rgb = '';
        }
        else {
            rgb += output[i - 1] + ' ';
        }
    }
    console.log('File Write End');
};
var output = present(width, ratio);
writeRGB(output);
