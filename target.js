"use strict";
exports.__esModule = true;
var fs = require("fs");
var width = 400;
var ratio = 16.0 / 9.0;
var height = (width / ratio);
// 랜더링 해주는 함수
var present = function (width, ratio) {
    var output = [];
    var aspect_ratio = ratio;
    var image_width = width;
    var image_height = image_width / aspect_ratio;
    console.log(image_width, image_height);
    for (var j = 0; j < image_height; j++) {
        for (var i = 0; i < image_width; i++) {
            var u = i / (image_width - 1);
            var v = j / (image_height - 1);
            output.push(parseInt(String(u * 255.999)));
            output.push(parseInt(String(v * 255.999)));
            output.push(parseInt(String(0.25 * 255.999)));
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
};
var output = present(width, ratio);
writeRGB(output);
