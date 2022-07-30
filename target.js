"use strict";
exports.__esModule = true;
var fs = require("fs");
var Vector_1 = require("./Vector");
var Ray_1 = require("./Ray");
var HittableList_1 = require("./HittableList");
var Sphere_1 = require("./Sphere");
var width = 400;
var ratio = 16.0 / 9.0;
;
var height = (width / ratio);
// 랜더링 해주는 함수
var present = function (width, ratio, world) {
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
            var r = new Ray_1["default"](origin, direction);
            var rayColor = (0, Ray_1.getRayColor)(r, world);
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
var main = function () {
    var world = new HittableList_1["default"]();
    world.add(new Sphere_1["default"](new Vector_1["default"](0.0, -100.5, -1.0)));
    world.add(new Sphere_1["default"](new Vector_1["default"](0.0, 0.0, -1.0)));
    var output = present(width, ratio, world);
    writeRGB(output);
};
main();
